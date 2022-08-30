import { Cognito } from './index';

describe('index', () => {
  it('index', async () => {
    const userPoolId = 'userPoolId'
    const clientId = 'clientId'
    const username = 'username'
    const password = 'password'

    Cognito.Configure(userPoolId, clientId)
    try {
      const accessToken = await Cognito.GetJwtToken(username, password);
      console.log(accessToken);
    } catch (error) {
      console.log(error);
    }
  });
});
