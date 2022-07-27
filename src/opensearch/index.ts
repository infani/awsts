import { Client } from '@opensearch-project/opensearch'

const NewClient = (url: string, user: string, password: string) => {
    const client = new Client({
        node: `https://${user}:${password}@${url}`,
    });
    const Create = (indexName: string, doc: any) => {
        const res = client.index({
            index: indexName,
            body: doc
        });
        return res
    }
    return {
        Create
    }
}

export const Opensearch = { NewClient }