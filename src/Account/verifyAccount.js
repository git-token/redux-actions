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

    this.web3.currentProvider.sendAsync({
      method: 'eth_signTypedData',
      params: [msgParams, address],
      from: address
    }, (error, sig) => {
      if (error) { console.log(error) }

      console.log('sig', sig)
    })
  }
}
