import { websiteConfig } from '../config';
import axios from 'axios';

const { baseUrl } = websiteConfig[process.env.NODE_ENV];

export const saveNewAddress = addressDetails => {
  // API call to save new address
  // axios - npm package
  const url = `${baseUrl}/addresses`;
  return axios.post(url, { ...addressDetails });
};

// Check if address handler already exists
export const getAddressFromHandle = handle => {
  const url = `${baseUrl}/addresses?handle=${handle}`;
  return axios.get(url);
};
