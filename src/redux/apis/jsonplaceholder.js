import axios from 'axios';

export default route =>
  axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/${route}`,
  });
