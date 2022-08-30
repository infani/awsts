export declare const Cognito: {
    Configure: (userPoolId: string, clientId: string) => void;
    GetJwtToken: (username: string, password: string) => Promise<void>;
};
