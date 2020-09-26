import axios from 'axios'
import '../config/config'

const instance = axios.create({
  baseURL: process.env.FB_URL,
});

export default instance