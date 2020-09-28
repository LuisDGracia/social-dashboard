import axios from 'axios'

const instance = axios.create({
  // No deberia dejar la url aqui
  baseURL: process.env.REACT_APP_FB_URL || "https://social-dashboard-b240c.firebaseio.com/"
});

export default instance
