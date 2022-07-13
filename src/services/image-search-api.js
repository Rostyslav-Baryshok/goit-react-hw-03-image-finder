import axios from 'axios';

const KEY = '28599383-28206a1b3fc5a66896effd792';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const res = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12"`
  );
  return res.data;
};

export const api = { fetchImages };
