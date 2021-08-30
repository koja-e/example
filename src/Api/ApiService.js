import axios from 'axios'
const baseUrl = `https://food-score.tech/api/v2`

const client = axios.create({
  baseURL: baseUrl,
  timeout: 30000
})

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
