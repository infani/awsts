import { IotData } from './index';

describe('index', () => {
  it('index', async () => {
    const res = await IotData.Publish('test', "test");
    expect(res.$metadata.httpStatusCode).toMatchSnapshot();
  });
});
