import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const apiBlog = axios.create({
  baseURL: 'https://api.github.com/',
})
