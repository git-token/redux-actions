export default function verifyAccount({ address, username }) {
  return (dispatch) => {
    const msgParams = [{
      type: 'address',
      name: 'Address',
      value: address
    }, {
      type: 'string',
      name: 'GitHub Username',
      value: username
    }]

    this.web3.eth.sendAsync({
      method: 'eth_signTypedData',
      params: [msgParams, address],
      from: address
    }).then((sig) => {
      console.log('sig', sig)
    }).catch((error) => {
      console.log('error', error)
    })
  }
}
