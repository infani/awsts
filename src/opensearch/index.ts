import { Client } from '@opensearch-project/opensearch'

const NewClient = (url: string, user: string, password: string) => {
    const client = new Client({
        node: `https://${user}@${password}@${url}:9200`,
      });
    return {
        client,
    }
}

const Opensearch = { NewClient }
export default Opensearch