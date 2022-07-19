import { AppSyncClient, ListApiKeysCommand } from '@aws-sdk/client-appsync';

const GetApiKey = async (apiId: string) => {
  const client = new AppSyncClient({});
  const command = new ListApiKeysCommand({ apiId });
  const response = await client.send(command);
  if (!!response.apiKeys) {
    for (let i = 0; i < response.apiKeys.length; i++) {
      let expires = response.apiKeys[i].expires;
      if (!!expires && expires > Date.now() / 1000) {
        if (!!response.apiKeys[i].id) {
          return response.apiKeys[i].id;
        }
      }
    }
  }
  return undefined;
};
export const AppSync = { GetApiKey };
