export default function verifyAccount({ address, username }) {
  return (dispatch) => {
    const msg = `0x${this.web3.sha3(`${username}@${address}`)}`

    this.web3.eth.signAsync(address, msg).then((sig) => {
      console.log('sig', sig)
    }).catch((error) => {
      console.log('error', error)
    })
  }
}
