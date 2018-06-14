import axios from 'axios';
import { baseURL } from '../constants';

export const request = (method, url) => {
  return axios({
    method,
    baseURL,
    url,
    responseType: 'json'
  })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};
