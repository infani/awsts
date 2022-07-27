import { Client } from '@opensearch-project/opensearch'

const NewClient = (url: string, user: string, password: string) => {
    const client = new Client({
        node: `https://${user}@${password}@${url}:9200`,
    });
    const Create = async (indexName: string, doc: any) => {
        const res = await client.index({
            index: indexName,
            body: doc,
        });
        console.log(res.body);
    }
    return {
        Create
    }
}

const Opensearch = { NewClient }
export default Opensearch