import { CloudMap } from './index';

describe('index', () => {
  it('index', async () => {
    const res= await CloudMap.DiscoverInstances('vivoreco', 'vivoreco');
    expect(res![0].NamespaceName).toMatchSnapshot();
  });
});
