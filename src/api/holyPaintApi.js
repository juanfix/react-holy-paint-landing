import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const holyPaintApi = axios.create({
  baseURL: VITE_API_URL,
});

holyPaintApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
  };

  return config;
});

export default holyPaintApi;
