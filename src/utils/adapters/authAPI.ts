import axios from '../../../axios'

class authAPI {
  async fetch() {
    try {
      const response = await axios.get('/auth/user')
      return response.data
    } catch (e) {
      return Promise.reject(e.message)
    }
  }
}

export default new authAPI()
// think about how to name this stuff...
