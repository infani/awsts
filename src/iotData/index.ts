import {
  IoTDataPlaneClient,
  PublishCommand,
} from '@aws-sdk/client-iot-data-plane';

import { mqtt, iot } from 'aws-iot-device-sdk-v2';

const Publish = async (topic: string, msg: string) => {
  const client = new IoTDataPlaneClient({});
  const command = new PublishCommand({
    topic,
    payload: Buffer.from(msg),
  });
  const res = await client.send(command);
  return res;
};

const Client = (certFile: string, keyFile: string, caFile: string, endpoint: string) => {
  let config_builder = iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder_from_path(certFile, keyFile);
  config_builder.with_certificate_authority_from_path(undefined, caFile);

  config_builder.with_clean_session(false);
  config_builder.with_client_id("test-" + Math.floor(Math.random() * 100000000));
  config_builder.with_endpoint(endpoint);
  const config = config_builder.build();

  const client = new mqtt.MqttClient();
  return client.new_connection(config);
}

export const IotData = { Publish, Client };
