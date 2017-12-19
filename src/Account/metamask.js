import Promise, { promisifyAll } from 'bluebird'

export default function metamask() {
  return (dispatch) => {
    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider)
      this.eth = promisifyAll(this.web3.eth)
      this.eth.getAccount().then((address) => {
        alert(`Found Address: ${address}`)
      }).catch((error) => {
        console.log('error', error)
        alert('MetaMask Account must be unlocked')
      })
    } else {
      alert('Could not find MetaMask Plug-in, dispatch alert')
    }
  }
}
