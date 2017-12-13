import Promise, { promisifyAll } from 'bluebird'
import GitHubAPI from 'github-api'
import AccountWorker from 'gittoken-web-workers/dist/Account.worker.js'


export default class GitTokenAccountWorker {
  constructor({ url }) {

    this.profileApiUrl = url

    this.worker = new AccountWorker()

    this.worker.onerror = this.handleError


  }

  getProfile() {
    this.worker.postMessage({
      event: 'GET_PROFILE',
      payload: this.profileApiUrl
    })
  }

  handleError(error) {
    console.log('error', error)
  }

  handleMessages() {
    return (dispatch) => {
      this.worker.addEventListener('message', (msg) => {
        dispatch(msg)
      })
    }
  }

}
