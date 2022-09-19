import {
  IoTDataPlaneClient,
  PublishCommand,
} from '@aws-sdk/client-iot-data-plane';

const Publish = async (topic: string, msg: string) => {
  const client = new IoTDataPlaneClient({});
  const command = new PublishCommand({
    topic,
    payload: Buffer.from(msg),
  });
  const res = await client.send(command);
  return res;
};

export const IotData = { Publish };
