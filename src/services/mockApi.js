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

const mockLeads = {
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
const mockApi = {
  // Leads
  createLead: (payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newLead = {
          id: mockLeads.data.length + 1,
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

export default mockApi

