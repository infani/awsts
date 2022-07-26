import Opensearch from './index';

describe('index', () => {
    it('index', async () => {
        const client = await Opensearch.NewClient("url", "admin", "password")
        expect(client).toMatchSnapshot()
    });
});
