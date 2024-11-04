import { LambdaClient } from "@aws-sdk/client-lambda";

const lambdaClient = new LambdaClient({
  region: "eu-north-1",
  credentials: {
    secretAccessKey: process.env.NEXT_PUBLIC_LAMBDA_SECRET_KEY as string,
    accessKeyId: process.env.NEXT_PUBLIC_LAMBDA_ACCESS_KEY as string,
  },
});

export default lambdaClient;
