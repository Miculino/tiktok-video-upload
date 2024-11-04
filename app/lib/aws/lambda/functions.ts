import { InvocationType, InvokeCommand } from "@aws-sdk/client-lambda";
import lambdaClient from "./lambdaClient";

interface LambdaCommandParams {
  FunctionName: string;
  InvocationType: InvocationType;
  Payload: string;
}

export async function generateTimelineFrames(s3_video_url: string) {
  console.log(s3_video_url);

  const params: LambdaCommandParams = {
    FunctionName: "generateTimelineFrames",
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({ s3_video_url }),
  };

  const command = new InvokeCommand(params);

  try {
    const data = await lambdaClient.send(command);

    console.log(data);
    console.log(JSON.parse(data.Payload?.transformToString() ?? ""));
  } catch (err) {
    console.error(err);
  }
}
