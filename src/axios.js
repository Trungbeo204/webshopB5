import axios from "axios";
let token = localStorage.getItem('Token')
axios.defaults.baseURL = 'https://shope-b3.thaihm.online/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `${token}`
export default axios