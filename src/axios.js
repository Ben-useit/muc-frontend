import axios from 'axios';
const customFetch = axios.create({
  baseURL: 'http://localhost:3005/api/v1',
  timeout: 10000,
  withCredentials: true,
});

export default customFetch;
