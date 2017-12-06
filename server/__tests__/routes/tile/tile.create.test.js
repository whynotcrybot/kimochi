/* global describe it before beforeEach */
import { expect } from 'chai'

import server from '../../../__mocks__/utils/server.mock'
import Tile from '../../../src/models/tile.model'
import TileFactory from '../../../__mocks__/factories/tile.factory'

const ENDPOINT = '/tiles'

let testTile

describe(`POST ${ENDPOINT}`, () => {
  before(async () => {
    await Tile.remove()
  })

  beforeEach(() => {
    testTile = TileFactory.generate()
  })

  describe('Create', () => {
    it('should create a tile', done => {
      server
        .post(ENDPOINT)
        .send(testTile)
        .end((err, res) => {
          const { body, status } = res
          expect(err).to.be.null
          expect(status).to.equal(200)
          expect(body.name).to.equal(testTile.name)
          expect(body.color).to.equal(testTile.color)
          expect(body).to.haveOwnProperty('_id')
          expect(body).to.haveOwnProperty('createdAt')
          expect(body).to.haveOwnProperty('updatedAt')
          done()
        })
    })
  })
})
