import axios from 'axios';

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/aero-frontend/test-task", 
  timeout: 1000,
});

export default instance;