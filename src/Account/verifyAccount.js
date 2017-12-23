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
    },{
      type: 'bool',
      name: 'Agree to GitToken Terms Of Service',
      value: 'true'
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
