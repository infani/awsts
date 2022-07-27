import { Opensearch } from './index';

describe('index', () => {
    it('index', async () => {
        const url = "url"
        const user = "admin"
        const password = "password"
        const client = Opensearch.NewClient(url, user, password)
        expect(client).toMatchSnapshot()
        // const res = await client.Create('test_create_5.7.27', {
        //     name: "vivoreco",
        //     year: "1980"
        // })
        // console.log(res)
    });
});
