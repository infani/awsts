import { getCloudMap } from "./index"

describe('index', () => {
    it('index', async () => {
        const req = await getCloudMap("vivoreco", "vivoreco");
        console.log(req);
        expect(getCloudMap).toBeDefined();
    });
});