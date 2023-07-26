## 영상: 
https://www.youtube.com/watch?v=JgPHHtk0BQI

## notion: 
https://codestates.notion.site/fe0e020d90b0427aa912b92c80cbe939?v=e9275161e140447f894de0d8cf87f2c2&p=50b4f0bb5daf4e49965e64c962df3dca&pm=c

# Achievement Goals

* 회원가입을 할 수 있다.
* 로그인/로그아웃을 할 수 있다.
* 유저 정보를 제어할 수 있다. (예: 새로고침을 해도 유저의 정보가 사라지지 않는다. 등등…)
* NFT를 민팅하는 페이지를 만들 수 있다.
* NFT를 거래하는 페이지를 만들 수 있다.
* 테마별 NFT를 조회하는 페이지를 만들 수 있다.
* 마이 페이지에서 나의 정보, 나의 NFT를 확인할 수 있다.


- FullHD (1920 \* 1080) or 4k 가로 화면에 최적화
- ethereum mainnet(1), Goerli testnet(5), HardHat testnet(31337) 네트워크 호환
- (): chainid

변수 활용 예시

import { useWeb3React } from '@web3-react/core'

1. account : const { account } = useWeb3React(); (계정 주소)
2. chainId : const { chainId } = useWeb3React(); (연결된 네트워크 아이디)

import { Balance, BlockNumber, NextNonce } from './WalletInfo';

1. balance : const balance = Balance(); (잔액)
2. blockNumber : const blockNumber = BlockNumber(); (블록넘버)
3. NextNonce : const nonce = NextNonce(); (논스값)
