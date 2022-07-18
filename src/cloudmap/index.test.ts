import { CloudMap } from './index';

describe('index', () => {
  it('index', async () => {
    const req = await CloudMap.DiscoverInstances('vivoreco', 'vivoreco');
    console.log(req);
    expect(CloudMap.DiscoverInstances).toBeDefined();
  });
});
