import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const GetParameter = async (name: string) => {
  const client = new SSMClient({});
  const command = new GetParameterCommand({
    Name: name,
    WithDecryption: true
  });
  const response = await client.send(command);
  console.log(response);
  return response.Parameter;
};

export const SSM = { GetParameter };
