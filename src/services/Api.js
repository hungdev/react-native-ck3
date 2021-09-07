import axios from 'axios'
import { baseURL } from './config'

// khai bao instance = setup cho axios, base url
const instance = axios.create({
  baseURL: 'https://forever21.hungvu.net/',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// export const getProductList = () => axios.get('https://forever21.hungvu.net/get-products')
export const getProductList = () => {
  return instance.get('get-products')
}

// https://forever21.hungvu.net/      get-products
// goi phuong thuc + phan duoi domain

// https://api.thecoffeehouse.com/api/verify_mobile
// https://api.thecoffeehouse.com/api/v2/menu
// export const getProductList = () => instance.get('v2/menu')

// export const login = (params) => instance.post('verify_mobile', params)
