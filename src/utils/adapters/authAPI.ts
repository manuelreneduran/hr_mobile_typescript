import axios from '../../../axios'
import { UserData } from '../../redux/reducers/AuthSlice'

class authAPI {
  async fetchUser() {
    try {
      const response = await axios.get('/auth/user')
      return response.data
    } catch (e) {
      return Promise.reject(e.message)
    }
  }

  async login(userData: UserData) {
    const { email, password } = userData
    try {
      const response = await axios.post('/auth/login', { email, password })
      return response.data.user
    } catch (e) {
      return Promise.reject(e.message)
    }
  }
}

export default new authAPI()
// think about how to name this stuff...
