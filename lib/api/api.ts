import axios from 'axios'

// axios.defaults.baseURL = 'https://next-docs-api.onrender.com'
// axios.defaults.baseURL = 'http://localhost:3000/api'
export const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
})
