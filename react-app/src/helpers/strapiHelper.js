import axios from 'axios';

let BASE_URL = 'http://localhost:1337/api';
let TOKEN = '9b0b6622e6542176fb2cf376f1abdf27b791ffb77e2d6fd18c347a0eb2af052988fe2eda634b223f348482c09bdcf86bfd414332709ca783e075ba6c3642e977d215d4141513611c619a4fe90452182cd9833c9fe3aeb2fed6326a73095360c369ceb1780f7bead69c9c83e442628f9dbc95bfad88ab2ad8c2401473e524d975';
let config = {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
      }
    }

export const getCollectionEntry = async (collection, entry = '') => {
  try {
      const res = await axios.get(`${BASE_URL}/${collection}/${entry}?populate=*`, config);
      return res.data;
  } catch (error) {
      console.error('Error fetching collection entry:', error);
      throw error;
  }
}