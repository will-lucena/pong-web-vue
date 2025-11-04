import api from './apiClient'
import { setAuthToken } from './apiClient'

// Real API service (uses axios)
const realApi = {
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

export default realApi

