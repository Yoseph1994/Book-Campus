import { config } from "@/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imageKit = new ImageKit({
  publicKey: config.env.imageKit.publicKey,
  privateKey: config.env.imageKit.privateKey,
  urlEndpoint: config.env.apiEndPoint,
});

export async function GET() {
  return NextResponse.json(imageKit.getAuthenticationParameters());
}
