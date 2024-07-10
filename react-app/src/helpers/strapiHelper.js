import axios from 'axios';

let REACT_APP_STRAPI_URL = 'localhost:1337/api'
let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY
      }
    }

export const getCollectionEntry = async (collection, entry = '') => {
  try {
      const res = await axios.get(`http://${REACT_APP_STRAPI_URL}/${collection}/${entry}?populate=deep`, config);
      return res.data;
  } catch (error) {
    return false;
  }
}


export const getSingleType = async (collection) => {
  try {
    const res = await axios.get(`http://${REACT_APP_STRAPI_URL}/${collection}?populate=deep`, config);
    return res.data;
  } catch (error) {
    return false;
  }
}