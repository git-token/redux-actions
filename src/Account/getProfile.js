export default function getProfile({ url }) {
  const value = url ? url : this.profileApiUrl
  this.worker.postMessage({ type: 'GET_PROFILE', value })
  return null
}
