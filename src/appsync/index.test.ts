import { AppSync } from './index';

describe('index', () => {
  it('index', async () => {
    const res = await AppSync.GetApiKey('vtib2crdejecxibzdt5rlklw44');
    expect(res).not.toBeUndefined()
  });
});
