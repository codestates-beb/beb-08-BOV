// 여기서 사용자에게 받은 데이터를 변수로 받는다. -> (NFT.sol로 변수 할당) 
// thirdweb ipfs 에 사진 업로드 후 uri 반환 -> 과거에 배운 내용대로 uri값이 나오면 create 키가 활성화 되고 누르면 web3와 연결되어 서명과 컨트랙트 수행 -> Ca 반환
import styled from 'styled-components';
import { Box, TextField, Button, Input } from "@mui/material";
import { useEffect, useState } from 'react';
import React from 'react';
import loading from '../Photo/Wedges-3s-200px.gif'
import nftloading from '../Photo/345.gif';

import { useStorageUpload } from '@thirdweb-dev/react';
import { ThirdwebStorage } from '@thirdweb-dev/storage';

import NFTArtifact from '../artifacts/contracts/ERC721.sol/ERC721.json';
import { ethers } from "ethers";
import { useWeb3React } from '@web3-react/core';


export function MintNFTPage() {

    const [signer, setSigner] = useState(); // 서명 
    const { active, library } = useWeb3React(); // 계정 활성화

    useEffect(() => { // 계정의 변화가 있을 경우 signer를 변동시킴
        if (!library) {
            setSigner(undefined);
            return;
        }

        setSigner(library.getSigner());
    }, [library])

    const [properties, setproperties] = useState([
        {
            trait_type: "",
            value: "",
        },
    ]);

    

    const [file, setFile] = useState();
    const [activating, setActivating] = useState(false);
    const [nftActivating, setnftActivating] = useState(false);

    const { mutateAsync: upload } = useStorageUpload();
    const storage = new ThirdwebStorage();
    const [uri, setUri] = useState('');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [json, setJson] = useState('');
    const [jsonData, setJsonData] = useState('');
    const [NFTUri, setNFTUri] = useState('');

    const [NFTContract, setNFTContract] = useState();
    const [NFT, setNFT] = useState('');
    const [NFTContractAddr, setNFTContractAddr] = useState('');
    const [nameNFT, setNameNFT] = useState('');
    

    // useEffect(() => { // URI가 갱신될 때 최신화
    //     if(!greetingContract) {
    //         return;
    //     }

    //     async function getGreeting(greetingContract) {
    //         const _greeting = await greetingContract.greet(); // 가져오고
    //         if (_greeting !== greeting) {
    //             setGreeting(_greeting) // 대입
    //         }
    //     }
    //     getGreeting(greetingContract);
    // }, [greetingContract, greeting]) // 이 부분이 변화될 경우

    const handleDeployContract = (event) => { // 배포 
        event.preventDefault();

        if (NFTContract) {
            return;
        }

        async function deployNFTContract(){
            const Minting = new ethers.ContractFactory(
                NFTArtifact.abi,
                NFTArtifact.bytecode,
                signer
            );

            try {
                setnftActivating(true);
                const NFTContract = await Minting.deploy(name, uri) // 컨트랙트에 들어갈 내용
                await NFTContract.deployed(); // 배포
                
                // 여기에 사용자에게 입력 받은 내용 들을 넣어보자 
                console.log("Deploying a NFT with name: ", name);
                console.log("Deploying a NFT with uri: ", uri);

                const nameNFT = await NFTContract.name(); // 어떤 내용을 확인할 것인가
                const NFTuri = await NFTContract.symbol();
                setNFTContract(NFTContract); // update contract deployed
                setNFT(NFTuri);
                setNameNFT(nameNFT);
                setNFTContractAddr(NFTContract.address); // get contact addr deployed
                window.alert(`NFT deployed to : ${NFTContract.address}`)
                setnftActivating(false);

            } catch (error) {
                window.alert('Error: ' + (error && error.message? `${error.message}` : ''))
            }
        }

        deployNFTContract();
    }

    const uploadToIpfs = async () => {
        setActivating(true);

        const uploadUri = await storage.upload({
            ImageUrl: [file],
            name: [
                name,
            ],
            description: [
                description,
            ],
            property: [
                properties,
            ]
        })

        if(uploadUri) {
            setUri(storage.resolveScheme(uploadUri));
            setJson(storage.downloadJSON(uploadUri));
        }
        // console.log('Upload URI: ', uploadUri);
        // // console.log('Upload URL: ', uploadUri.data); 
        // console.log('Upload URL: ', storage.resolveScheme(uploadUri));
        // console.log('json: ', storage.downloadJSON(uploadUri));
        // https://gateway.ipfscdn.io/ipfs/
    }

    if(json) {
        console.log('json:: ', json);
        const promise1 = Promise.resolve(json);
        promise1.then(data => {
        setJsonData(data.ImageUrl[0]);
        console.log('data', data);
        console.log(data.ImageUrl[0]);
        setActivating(false);
    })}

    const addProperty = () => {
        setproperties((properties) => [
            ...properties,
            {
                trait_type: "",
                value: "",
            },
        ]);
    }

    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleDesciptionChange = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
    }

    const handleNFTUriChange = (event) => {
        event.preventDefault();
        setNFTUri(event.target.value);
    }

    return(
        <div>
            <CreatePageWrapper>
                <CreateView>
                <Title>Create New Item</Title>

                <Box>
                <UriHelper>🚨Please follow the order🚨</UriHelper>
                <Helper>Required fields ✅</Helper>
                <FieldTitle>1️⃣ Upload Image, Video, Audio, or 3D Model ✅</FieldTitle>
                <Helper>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</Helper>
                <Helper>It is stored in ipfs of thirdweb.</Helper>
                
                <Input type="file" onChange= {(e) => {
                    if(e.target.files) {
                        setFile(e.target.files[0]);
                    }
                }} />

                <FieldTitle>2️⃣ Token Name ✅</FieldTitle>
                <TextField required fullWidth margin="dense" id="token-name" onChange={handleNameChange}/>

                <FieldTitle>3️⃣ Description</FieldTitle>
                <Helper>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</Helper>
                <TextField required multiline rows={4} fullWidth margin="dense" id="description" onChange = {handleDesciptionChange}/>

                <FieldTitle>4️⃣ Properties</FieldTitle>
                <Helper>Textual traits that show up as rectangles</Helper>
                <PropertyBox>
                    {properties.map(({ trait_type, value }, index) => 
                    <PropertyRow key={`property-${index}`}>
                        <PropertyKeyField id ={`property-${index}-key`} label = "key">{trait_type}</PropertyKeyField>
                        <Helper>{trait_type}</Helper>
                        <PropertyValueField id={`property-${index}-value`} label="value">{value}</PropertyValueField>
                    </PropertyRow>)}
                </PropertyBox>
                <Button variant = "outlined" fullWidth onClick={addProperty}>
                    Add Property
                </Button>

                <CreateButtonView>
                <Button onClick={uploadToIpfs} variant = "outlined" fullWidth >5️⃣ Upload ✅</Button>
                </CreateButtonView>
                
                <ImageUrl shape="square" height="257px" width="350px">
                    { activating ? <img src={loading}/> : jsonData ? <img src={jsonData} alt="Image" height="245px" width="338px"></img> : <>not yet deployed</>}
                </ImageUrl>

                <UriHelper>NFT URI: {uri ? uri : <>not yet deployed</>}</UriHelper>
                <UriHelper>Image URL: {jsonData ? jsonData : <>not yet deployed</>}</UriHelper>

                <FieldTitle>6️⃣ NFT URI ✅</FieldTitle>
                <TextField required fullWidth margin="dense" id="image-url" onChange={handleNFTUriChange}></TextField>

                <CreateButtonView>
                <Button disabled = {NFTUri && NFTUri == uri ? false : true} variant='contained' fullWidth size="large" onClick={handleDeployContract}>{ nftActivating ? <img src = {nftloading}/> : <>create</>}</Button> 
                {/* 위의 최소 조건을 만족시켰을 때 활성화 될 수 있도록 한다. */}
                </CreateButtonView>
                <UriHelper>Contract Address: {NFTContractAddr ? NFTContractAddr : <>NFT not yet deployed</>}</UriHelper>
                <UriHelper>Deployed NFT name: {nameNFT ? nameNFT : <>NFT not yet deployed</>}</UriHelper>
                <UriHelper>Deployed NFT URI: {NFT ? NFT : <>NFT not yet deployed</>}</UriHelper>
                </Box>
                </CreateView>
            </CreatePageWrapper> 
        </div>
    )
}

const ImageUrl = styled.div`
    position: relative;
    border: 3px dashed rgb(204, 204, 204);
    border-radius: 10px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    //flex-direction: column;
    display: flex;
    height: 257px;
    width: 350px;
`;

const CreatePageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const CreateView = styled.div`
    width: 100%;
    max-width: 640px;
    padding: 24px;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-top: 70px;
`
const FieldTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin-top: 20px;
    margin-bottom: 4px;
`;

const PropertyBox = styled.div`
    margin-bottom: 8px;
`;

const PropertyRow = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 8px;  // 밑의 코드는 간격을 만들어 주지 않음
`;

const UriHelper = styled.div`
    font-size: 15px;
    font-weight: 800;
`;

const PropertyKeyField = styled(TextField)`
    flex: 1;
    //margin-right: 8px;
`;

const PropertyValueField = styled(TextField)`
    flex: 2;
    //margin-left: 8px;
`;

const CreateButtonView=styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
`;

const Helper = styled.div`
    font-size: 12px;
    color: rgb(112, 122, 131);
    font-weight: 500;
`;