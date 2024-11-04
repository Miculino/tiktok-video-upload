import { InvocationType, InvokeCommand } from "@aws-sdk/client-lambda";
import lambdaClient from "./lambdaClient";

import { UppyFile, Meta } from "@uppy/core";

type DefaultUppyFile = UppyFile<Meta, Record<string, never>> | undefined;

interface LambdaCommandParams {
  FunctionName: string;
  InvocationType: InvocationType;
  Payload: string;
}

export async function generateTimelineFrames(video_file: DefaultUppyFile) {
  console.log(video_file);

  const params: LambdaCommandParams = {
    FunctionName: "generateTimelineFrames",
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({
      video_file: video_file?.data,
    }),
  };

  const command = new InvokeCommand(params);

  console.log(command);

  try {
    const data = await lambdaClient.send(command);

    console.log(data);
    console.log(JSON.parse(data.Payload?.transformToString() ?? ""));
  } catch (err) {
    console.error(err);
  }
}
