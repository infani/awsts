import { IotData } from './index';

describe('index', () => {
  it('Publish', async () => {
    const res = await IotData.Publish('test', "test");
    expect(res.$metadata.httpStatusCode).toMatchSnapshot();
  });

  it('Client', async () => {
    const cli = await IotData.Client(
      './src/iotData/certificate.pem.crt',
      './src/iotData/private.pem.key',
      './src/iotData/AmazonRootCA1.pem',
      'a1whrgfehabj9-ats.iot.ap-northeast-1.amazonaws.com'
    );
    // await cli.connect()
    cli.publish("test", 'test2', 0)
  });
});
