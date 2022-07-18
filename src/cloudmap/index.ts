import {
  ServiceDiscoveryClient,
  DiscoverInstancesCommand,
} from '@aws-sdk/client-servicediscovery';

const DiscoverInstances = async (namespace: string, service: string) => {
  const client = new ServiceDiscoveryClient({});
  const command = new DiscoverInstancesCommand({
    NamespaceName: namespace,
    ServiceName: service,
  });
  const response = await client.send(command);
  console.log(response);
  return response.Instances;
};

export const CloudMap = { DiscoverInstances };
