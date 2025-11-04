import mockApi from './mockApi'
import realApi from './realApi'
import { setAuthToken } from './apiClient'

// Re-export setAuthToken for backward compatibility
export { setAuthToken }

// Re-export mockApi and realApi for direct access if needed
export { default as mockApi } from './mockApi'
export { default as realApi } from './realApi'

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
