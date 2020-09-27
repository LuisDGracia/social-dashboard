import axios from 'axios'
import './config/config'

const instance = axios.create({
  baseURL: process.env.REACT_APP_FB_URL,
});

export default instance