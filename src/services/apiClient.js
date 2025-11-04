import axios from 'axios'

// Resolve API base URL
const resolvedBaseUrl =
  import.meta?.env?.VITE_API_BASE_URL ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api/v1'
    : 'https://api.pongrn.com.br/api/v1')

// Create an axios instance with default config
const api = axios.create({
  baseURL: resolvedBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Store token for Bearer authentication
let authToken = null

// Function to set the authentication token
export function setAuthToken(token) {
  authToken = token
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

// Axios interceptor to add Authorization header
api.interceptors.request.use(
  (config) => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api

