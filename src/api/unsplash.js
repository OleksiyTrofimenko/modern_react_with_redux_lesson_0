import axios from 'axios';
import { UNSPLASH_API_KEY } from './access';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: UNSPLASH_API_KEY,
  },
});
