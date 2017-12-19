import Promise, { promisifyAll } from 'bluebird'

export default function metamask() {
  return (dispatch) => {
    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider)
      this.web3.eth = promisifyAll(this.web3.eth)
      this.web3.version = promisifyAll(this.web3.version)
      this.web3.eth.getAccountsAsync().then((accounts) => {
        if (!accounts.length) {
          alert('MetaMask Account must be unlocked')
        } else {
          alert(`Found Address: ${accounts[0]}`)
          return this.web3.version.getNetworkAsync()
        }
      }).then((network) => {
        console.log('network', network)
      }).catch((error) => {
        console.log('error', error)
      })
    } else {
      alert('Could not find MetaMask Plug-in, dispatch alert')
    }
  }
}
