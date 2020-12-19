import axios from 'axios';

// export const fetchMoviesAction = async (search: string): Promise<Movie[]> => {
//   const { data } = await axios.get(`http://omdbapi.com/?apikey=448b4c3e&s=${search}`);
//   return data;
// };
const api = axios.create({
  baseURL: 'http://omdbapi.com/?apikey=448b4c3e&'
});

export default api;
