const BASE_URL = 'https://pixabay.com/api/';
const KEY = '28599383-28206a1b3fc5a66896effd792';
const perPage = 12;

function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error(`Request -${query}- not found`));
    }
    return response.json();
  });
}

const api = { fetchImages };
export default api;
