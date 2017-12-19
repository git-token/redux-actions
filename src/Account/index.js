import Promise, { promisifyAll } from 'bluebird'
import GitHubAPI from 'github-api'

import worker from './worker.js'
import getProfile from './getProfile.js'
import handleError from './handleError.js'
import metamask from './metamask.js'

export default class GitTokenAccountActions {
  constructor({ profileApiUrl }) {
    this.profileApiUrl = profileApiUrl
    this.worker = worker.bind(this)
    this.getProfile = getProfile.bind(this)
    this.handleError = handleError.bind(this)
    this.metamask = metamask.bind(this)
  }

}
