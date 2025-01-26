"use client";
import { config } from "@/config";
import { toast } from "@/hooks/use-toast";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import Image from "next/image";
import { useRef, useState } from "react";

const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

function ImageUpload({
  onFileChange,
}: {
  onFileChange: (file: string) => void;
}) {
  const ikUploadRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const authenticator = async () => {
    try {
      const res = await fetch(`${config.env.apiEndPoint}/api/auth/imagekit`);
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error("Authentication request failed:" + errorText);
      }
      const { signature, token, expire } = await res.json();
      return { signature, token, expire };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Authentication request failed ${error.message}`);
      } else {
        throw new Error("Authentication request failed");
      }
    }
  };

  interface ErrorResponse {
    message: string;
  }

  const onError = (error: ErrorResponse) => {
    console.log("Error uploading file", error);
    setLoading(false);
    toast({
      title: "File Upload Failed",
      description: "Please try again later",
      variant: "destructive",
    });
  };

  const onSuccess = (res: { filePath: string }) => {
    setFile(res);
    setLoading(false);
    onFileChange(res.filePath);
    toast({
      title: "File Uploaded",
      description: `${res.filePath} uploaded successfully`,
    });
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
        onUploadStart={() => setLoading(true)}
      />
      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();
          if (ikUploadRef.current) {
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="Upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>
        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner"></div>
        </div>
      ) : (
        file && (
          <IKImage
            alt={file?.filePath || "Uploaded File"}
            path={file?.filePath || ""}
            height={200}
            width={500}
          />
        )
      )}
    </ImageKitProvider>
  );
}

export default ImageUpload;
