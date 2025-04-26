import axios from 'axios'

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.example.com',
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

// Mock API service
export const mockApi = {
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
  getUsers: () => {
    return api.get('/users')
  },

  getUserById: (id) => {
    return api.get(`/users/${id}`)
  },

  getPosts: () => {
    return api.get('/posts')
  },

  // Add more real API methods as needed
}

// Export the appropriate API based on environment
// You can switch between mock and real API here
const isUsingMockApi = process.env.REACT_APP_USE_MOCK_API === 'true' || true
export default isUsingMockApi ? mockApi : realApi
