export const config = {
  env: {
    databaseUrl: process.env.DATABASE_URL!,
    apiEndPoint: process.env.NEXT_PUBLIC_API_URL!,
    apiProdEndPoint: process.env.NEXT_PUBLIC_PROD_API_URL!,
    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_KEY!,
      privateKey: process.env.IMAGE_KIT_PRIVATE_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGE_KIT_URL!,
    },
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
      qstashUrl: process.env.QSTASH_URL!,
      qstashToken: process.env.QSTASH_TOKEN!,
    },
    resend: {
      resendApiKey: process.env.RESEND_API_KEY!,
    },
  },
};
