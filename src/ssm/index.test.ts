import { SSM } from './index';

describe('index', () => {
  it('index', async () => {
    const res = await SSM.GetParameter('TestGetParameter');
    expect(res?.Name).toMatchSnapshot();
  });
});
