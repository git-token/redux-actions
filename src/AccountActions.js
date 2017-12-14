import Promise, { promisifyAll } from 'bluebird'
import GitHubAPI from 'github-api'
import AccountWorker from 'gittoken-web-workers/dist/Account.worker.js'


export default class GitTokenAccountActions {
  constructor({ url }) {

    this.profileApiUrl = url

    this.worker = new AccountWorker({})


    this.worker.onmessage = this.handleMessage
    this.worker.onerror = this.handleError

  }

  getProfile({ url }) {
    const value = url ? url : this.profileApiUrl
    this.worker.postMessage({ type: 'GET_PROFILE', value })
  }

  handleError(error) {
    console.log('error', error)
  }

  handleMessage(msg, cb) {
    cb(msg)
  }

  handleMessages() {
    return (dispatch) => {
      this.worker.onmessage(({ data }) => {
        const { type, id, value } = data
        if (type) {
          dispatch({ type, id, value })
        }
      })
    }
  }

}
