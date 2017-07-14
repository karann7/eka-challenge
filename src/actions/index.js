import axios from 'axios';

export const REGISTER_USER = 'register_user';

const url = 'url for the server here';

export function registerUser(values) {
  const request = axios.post(`${url}`, values)
  return {
    type: REGISTER_USER,
    payload: request
  }
}

//register user and then make a request to the API