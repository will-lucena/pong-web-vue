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

const mockLeads =
  {
    "data": [
        {
            "id": "1",
            "type": "lead",
            "attributes": {
                "name": "William Lucena",
                "email": "will.lucen4@gmail.com",
                "company": "",
                "pong_member": true,
                "message": "",
                "created_at": "2025-10-30T20:02:00Z"
            }
        },
        {
            "id": "2",
            "type": "lead",
            "attributes": {
                "name": "Will",
                "email": "williamaster1@gmail.com",
                "company": "WL",
                "pong_member": false,
                "message": "oi oi",
                "created_at": "2025-10-30T21:48:38Z"
            }
        },
        {
            "id": "3",
            "type": "lead",
            "attributes": {
                "name": "Klébia",
                "email": "klebiakarinalc@gmail.com",
                "company": "Nexus",
                "pong_member": false,
                "message": "Como a comunidade pode me ajudar?",
                "created_at": "2025-10-30T21:53:06Z"
            }
        }
    ]
}

// Mock API service
export const mockApi = {
  // Leads
  createLead: (payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newLead = {
          id: mockLeads.length + 1,
          ...payload,
          created_at: new Date().toISOString(),
        }
        mockLeads.data.unshift(newLead) // Add to beginning of array
        resolve({ data: newLead })
      }, 500)
    })
  },

  getLeads: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockLeads })
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

  getLeads: (token = null) => {
    if (token) {
      setAuthToken(token)
    }
    return api.get('/leads')
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
// Set VITE_USE_MOCK_API=true in .env file or environment
// Note: In Vite, env vars are always strings, so check for string 'true'
const isUsingMockApi = String(import.meta.env.VITE_USE_MOCK_API || '').toLowerCase() === 'true'

export default isUsingMockApi ? mockApi : realApi

// Log which API is being used for debugging
if (import.meta.env.DEV) {
  console.log(
    '🔌 API Mode:',
    isUsingMockApi ? 'MOCK' : 'REAL',
    `(VITE_USE_MOCK_API=${import.meta.env.VITE_USE_MOCK_API})`
  )
}
