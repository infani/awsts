import { mqtt } from 'aws-iot-device-sdk-v2';
export declare const IotData: {
    Publish: (topic: string, msg: string) => Promise<import("@aws-sdk/client-iot-data-plane/dist-types/").PublishCommandOutput>;
    Client: (certFile: string, keyFile: string, caFile: string, endpoint: string) => Promise<mqtt.MqttClientConnection>;
};
