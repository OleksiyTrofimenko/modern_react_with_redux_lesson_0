import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID df6d6058fc02b45a52f8c17c4cb96af69341ababb45f77c78329da674b0f1fc3',
  },
});
