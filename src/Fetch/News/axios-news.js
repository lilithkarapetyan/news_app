import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://newsapi.org/v2',
  baseURL: 'https://arcane-castle-95125.herokuapp.com',
  timeout: 10000
});

axiosInstance.interceptors.request.use(request => {
  const key = "1265082e2740467db5f3dab353ae27b4";
  if (!request.params) {
    request.params = {};
  }
  request.params = {
    ...request.params,
    language: "en",
    apiKey: key
  };
  return request;
});

export default axiosInstance;