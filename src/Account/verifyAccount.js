import axios from 'axios'

export default function verifyAccount({ address, username, termsOfService }) {
  return (dispatch) => {
    const msgParams = [{
      type: 'address',
      name: 'Ethereum Address',
      value: address
    }, {
      type: 'string',
      name: 'GitHub Username',
      value: username
    },{
      type: 'string',
      name: 'GitToken Terms of Service',
      value: termsOfService
    },{
      type: 'bool',
      name: 'Agree to GitToken Terms of Service',
      value: 'true'
    }]

    this.web3.currentProvider.sendAsync({
      method: 'eth_signTypedData',
      params: [msgParams, address],
      from: address
    }, (error, sig) => {
      if (error) { console.log(error) }
      // console.log('sig', sig)
      axios({
        url: `${this.accountApiUrl}/verify`,
        method: 'POST',
        data: {
          msgParams,
          sig: sig.result
        },
        json: true
      }).then((verified) => {
        console.log('verified', verified)
        // dispatch()
      }).catch((error) => {
        console.log('error', error)
      })
    })
  }
}
