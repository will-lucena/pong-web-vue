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

// Mock data
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more mock users as needed
]

const mockPosts = [
  { id: 1, title: 'First Post', body: 'This is the first post content', userId: 1 },
  { id: 2, title: 'Second Post', body: 'This is the second post content', userId: 2 },
  // Add more mock posts as needed
]

const mockLeads = [
  { id: 1, name: 'John Doe', email: 'john@example.com', company: 'Example Inc.', message: 'Hello, world!', pong_member: false },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'Example Corp.', message: 'Hello, world!', pong_member: true },
  // Add more mock leads as needed
]

// Mock API service
export const mockApi = {
  // Leads
  createLead: (payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: payload })
      }, 500)
    })
  },

  getUsers: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockUsers })
      }, 500)
    })
  },

  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find((user) => user.id === parseInt(id))
        if (user) {
          resolve({ data: user })
        } else {
          reject(new Error('User not found'))
        }
      }, 500)
    })
  },

  getPosts: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockPosts })
      }, 500)
    })
  },

  // Add more mock API methods as needed
}

// Real API service (will use axios)
export const realApi = {
  // Leads
  createLead: (payload) => {
    return api.post('/leads', payload)
  },

  // getUsers: () => {
  //   return api.get('/users')
  // },

  // getUserById: (id) => {
  //   return api.get(`/users/${id}`)
  // },

  // getPosts: () => {
  //   return api.get('/posts')
  // },

  // Add more real API methods as needed
}

// Export the appropriate API based on environment
// You can switch between mock and real API here
const isUsingMockApi = import.meta?.env?.VITE_USE_MOCK_API === 'true'
export default isUsingMockApi ? mockApi : realApi
