import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';

let UserPoolId: string
let ClientId: string

export const Configure = (userPoolId: string, clientId: string) => {
  UserPoolId = userPoolId
  ClientId = clientId
}

export const GetJwtToken = async (username: string, password: string) => {
  var authenticationData = {
    Username: username,
    Password: password,
  };
  var authenticationDetails = new AuthenticationDetails(authenticationData);
  var poolData = { UserPoolId, ClientId };
  var userPool = new CognitoUserPool(poolData);
  var userData = {
    Username: username,
    Pool: userPool,
  };
  var cognitoUser = new CognitoUser(userData);
  await new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken);
        resolve(accessToken);
      },
      onFailure: function (err) {
        reject(err.message);
      },
    });
  });
};
