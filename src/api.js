import axios from 'axios'
import store from './store'
import { SET_UPDATING } from './store/mutations'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

function Singleton() {
  // Singleton stuff
  if (typeof Singleton.instance === 'object') {
    return Singleton.instance
  }
  Singleton.instance = this

  // Private
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  let updatingCounter = 0

  function auth(data) {
    const url = '/api/login'
    return axiosInstance.request({
      url,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: `email=${data.email}&password=${data.password}`,
    })
  }

  axios.interceptors.request.use(config => {
    const token = store.state.auth.api_token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    updatingCounter++
    store.commit(SET_UPDATING, true)

    return config
  })

  axios.interceptors.response.use(
    response => {
      updatingCounter--
      if (updatingCounter === 0) {
        store.commit(SET_UPDATING, false)
      }
      return response
    },
    error => {
      updatingCounter--
      if (updatingCounter === 0) {
        store.commit(SET_UPDATING, false)
      }
      if (
        error.response &&
        error.response.status >= 500 &&
        error.response.status < 600
      ) {
        store.dispatch(ADD_TOAST_MESSAGE, {
          text: error.response.status + ' Server Error',
          type: 'danger',
        })
      }
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        store.dispatch(ADD_TOAST_MESSAGE, {
          text: error.response.data.message,
          type: 'danger',
        })
      }
      return error
    },
  )

  // Public
  this.get = axiosInstance.get
  this.post = axiosInstance.post
  this.request = axiosInstance.request
  this.patch = axiosInstance.patch
  this.delete = axiosInstance.delete
  this.auth = auth
}

export default new Singleton()
