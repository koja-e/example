import axios from 'axios'
import store from '@/store'

const baseUrl = `https://corona-lab.tech/api/v2`

const client = axios.create({
  baseURL: baseUrl,
  timeout: 30000
})
client.interceptors.request.use(
  config => {
    console.group(`>>> REQ [${config.method.toUpperCase()}] ${config.url}`)
    console.dir(config)
    console.groupEnd()

    const conf = store.getters.headerConfig
    config.headers['auto-login-token'] = conf.headers['auto-login-token']
    config.headers['access-token'] = conf.headers['access-token']
    config.headers['client'] = conf.headers['client']
    config.headers['uid'] = conf.headers['uid']
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

client.interceptors.response.use(
  response => {
    console.group(`<<< RES [${response.config.method.toUpperCase()}] ${response.config.url}`)
    console.dir(response)
    console.groupEnd()
    return response
  }
)

const ApiService = {
  get: (url) => {
    return client.get(baseUrl + url)
      .then(
        resolve => {
          return resolve
        }
      )
      .catch(
        reject => {
          return reject
        }
      )
  },
  post: (url, params) => {
    return client.post(baseUrl + url, params)
      .then(
        resolve => {
          return resolve
        }
      )
      .catch(
        reject => {
          return reject
        }
      )
  },
  put: (url, params) => {
    return client.put(baseUrl + url, params)
      .then(
        resolve => {
          return resolve
        }
      )
      .catch(
        reject => {
          return reject
        }
      )
  },
  patch: (url, params) => {
    return client.patch(baseUrl + url, params)
      .then(
        resolve => {
          return resolve
        }
      )
      .catch(
        reject => {
          return reject
        }
      )
  },
  delete: (url, params = null) => {
    if (!params) {
      return client.delete(baseUrl + url)
        .then(
          resolve => {
            return resolve
          }
        )
        .catch(
          reject => {
            return reject
          }
        )
    }
    return client.delete(baseUrl + url, {data: params})
      .then(
        resolve => {
          return resolve
        }
      )
      .catch(
        reject => {
          return reject
        }
      )
  }
}

export default ApiService
