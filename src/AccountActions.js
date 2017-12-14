import Promise, { promisifyAll } from 'bluebird'
import GitHubAPI from 'github-api'
import AccountWorker from 'gittoken-web-workers/dist/Account.worker.js'


export default class GitTokenAccountActions {
  constructor({ url }) {

    this.profileApiUrl = url

  }

  getProfile({ url }) {
    const value = url ? url : this.profileApiUrl
    this.worker.postMessage({ type: 'GET_PROFILE', value })
  }

  handleError(error) {
    console.log('error', error)
  }

  worker() {
    return (dispatch) => {
      this.worker = new AccountWorker({})
      this.worker.onerror = this.handleError
      this.worker.addEventListener('message', ({ data }) => {
        try {
          const { type, id, value } = JSON.parse(data)
          if (type) {
            dispatch({ type, id, value })
          }
        } catch (error) {
          console.log('error', error)
        }
      })
    }
  }

}
