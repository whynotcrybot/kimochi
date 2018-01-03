/* global describe it */
import { expect } from 'chai'

import server from '../../__mocks__/utils/server.mock'

const ENDPOINT = '/healthy'

describe('GET ' + ENDPOINT, () => {
  it('should return status 200 and message: OK', done => {
    server.get(ENDPOINT).end((err, res) => {
      const { status, body } = res
      expect(err).to.be.null
      expect(status).to.equal(200)
      expect(body).to.haveOwnProperty('message')
      expect(body.message).to.equal('OK')
      done()
    })
  })
})
