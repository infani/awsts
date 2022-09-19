import { IotData } from './index';

//AWS_PROFILE=default yarn test src/iotData/index.test.ts
describe('index', () => {
  it('index', async () => {
    const res = await IotData.Publish('test', "test");
    expect(res.$metadata.httpStatusCode).toMatchSnapshot();
  });
});
