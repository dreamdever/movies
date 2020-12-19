import axios from 'axios';

const api = axios.create({
  baseURL: 'http://omdbapi.com/?apikey=448b4c3e&'
});

export default api;
