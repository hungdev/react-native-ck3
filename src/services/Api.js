import axios from 'axios'
import { baseURL } from './config'

// khai bao instance = setup cho axios, base url
const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api/',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

// export const getProductList = () => axios.get('https://forever21.hungvu.net/get-products')
export const getProductList = () => {
  return instance.get('get-products')
}
export const getProductDetail = (id) => {
  return instance.get(`product/${id}`)
}


export const getMenu = () => instance.get('v2/menu') // product
export const getCategory = () => instance.get('v2/category/web') // category
export const getAllStores = () => instance.get('get_all_store')
export const Login = (params) => instance.post('verify_mobile', params)
export const verifyPhone = () => instance.get('verify_mobile')


// https://forever21.hungvu.net/      get-products
// goi phuong thuc + phan duoi domain

// https://api.thecoffeehouse.com/api/verify_mobile
// https://api.thecoffeehouse.com/api/v2/menu
// export const getProductList = () => instance.get('v2/menu')

// export const login = (params) => instance.post('verify_mobile', params)
