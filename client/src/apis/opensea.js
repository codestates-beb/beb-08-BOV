import axios from 'axios'

//모든 bundle 정보 가져오기
export const getBundles = async (offset) => {
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'},
    url: `https://testnets-api.opensea.io/api/v1/bundles?limit=20&offset=${offset}`
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log("getBundles err: ",err);
  }
}

//모든 collection 정보 가져오기
export const getCollections = async (offset, limit) => {
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'},
    url: `https://testnets-api.opensea.io/api/v1/collections?offset=${offset}&limit=${limit}`
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log("getCollections err: ",err);
  }
}

//collection 정보 가져오기
export const getCollection = async (collection_slug) => {
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'},
    url: `https://testnets-api.opensea.io/api/v1/collection/${collection_slug}`
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log("getCollection err: ",err);
  }
}

//collection stats 정보 가져오기
export const getCollectionStats = async (collection_slug) => {
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'},
    url: `https://testnets-api.opensea.io/api/v1/collection/${collection_slug}/stats`
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log("getCollectionStats err: ",err);
  }
}

//NFT assets 정보 가져오기
export const getAssets = async (addr, collection_slug) => {
  console.log("getAssets",addr,collection_slug)
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'},
    url: `https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=${addr}&collection=${collection_slug}&order_by=sale_price&order_direction=asc&offset=0&limit=50&include_orders=true`
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log("getAssets err: ",err);
  }
}

// export const getCollectionStats = async (collection_slug) =>{
//   const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch(`https://testnets-api.opensea.io/api/v1/collection/3landersgoerli/stats`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }