import { DiscoverInstances } from "./index"

describe('index', () => {
    it('index', async () => {
        const req = await DiscoverInstances("vivoreco", "vivoreco");
        console.log(req);
        expect(DiscoverInstances).toBeDefined();
    });
});