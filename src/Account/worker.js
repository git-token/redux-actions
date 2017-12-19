import AccountWorker from 'gittoken-web-workers/dist/Account.worker.js'

export default function worker() {
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
