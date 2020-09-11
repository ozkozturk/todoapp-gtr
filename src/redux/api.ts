import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todoapp-gtr-api.herokuapp.com',
});

export default api;
