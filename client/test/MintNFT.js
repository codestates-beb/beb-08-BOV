// import()는 ES6 모듈입니다. export()와 함께 일반적으로 ES6 가져 오기 및 내보내기라고합니다. 이는 본질적으로 문이 ES 모듈 외부의 다른 파일 유형과 함께 사용할 수 없음을 의미합니다.
// https://www.delftstack.com/ko/howto/javascript/javascript-import-vs-require/
// require vs import
const { Signer } = require('ethers');
const { before } = require ('mocha');

const { expect } = require("chai");
const  { ethers } = require("hardhat");

describe("MintNFT", function () {
    let owner = Signer;
    // Declare a variable for the owner's Signer object

    before(async() => { // test code가 실행되기 전에 실행되는 부분
        [owner] = await ethers.getSigners(); // test 용 지갑 1개 가져오기 
    });

    it ("should have 10 nfts", async () => { //test 코드가 작성되는 곳 
        const nameNFT = await ethers.getContractFactory('MintNFT') // contract Builder
        const contract = await nameNFT.deploy();

        await contract.deployed();

        expect(await contract.balanceOf(await owner.getAddress())).to.be.equal(10);
    });

});