import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://127.0.0.1:8081', // PHP server
  headers: { Accept: 'application/json' }
});
