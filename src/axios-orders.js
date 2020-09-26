import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.FB_URL || process.env.REACT_APP_FB_URL,
});

export default instance