/* global describe it before */
import { expect } from 'chai'

import server from '../../../__mocks__/utils/server.mock'
import Tile from '../../../source/models/tile.model'
import TileFactory from '../../../__mocks__/factories/tile.factory'

const ENDPOINT = '/tiles'

let testTile

describe(`DELETE ${ENDPOINT}/:id`, () => {
  before(async () => {
    await Tile.remove()
    testTile = await Tile.create(TileFactory.generate())
  })

  describe('Delete', () => {
    it('should delete a tile', done => {
      server
        .delete(`${ENDPOINT}/${testTile._id}`)
        .end((err, res) => {
          const { status } = res
          expect(err).to.be.null
          expect(status).to.equal(200)
          done()
        })
    })
  })
})
