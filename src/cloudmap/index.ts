import { ServiceDiscoveryClient, DiscoverInstancesCommand } from "@aws-sdk/client-servicediscovery";


const getCloudMap = async (namespace: string, service: string) => {
    const client = new ServiceDiscoveryClient( { region: "ap-northeast-1" } );
    const command = new DiscoverInstancesCommand({ NamespaceName: namespace, ServiceName: service });
    const response = await client.send(command);
    console.log(response);
    return response.Instances;
}

export { getCloudMap };