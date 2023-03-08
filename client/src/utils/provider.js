import { Web3Provider } from '@ethersproject/providers';

export function getProvider(provider) {
    const web3Provider = new Web3Provider(provider);
    web3Provider.pollingInterval = 1000; // 1초에 한번씩 이더리움 네트워크와 동기화
    return web3Provider;
}