export interface Config{
    baseUrl: string,
    apiKey: string,
    rsaPrivateKey: string,
    safeheronRsaPublicKey: string,
    requestTimeout?: number,
    web3WalletAccountKey: string,
    web3WalletEVMAddress: string
};