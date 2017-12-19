export default function metamask() {
  return (dispatch) => {
    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider)
    } else {
      alert('Could not find MetaMask Plug-in, dispatch alert')
    }
  }
}
