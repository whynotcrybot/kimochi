/* global describe it before */
import { expect } from 'chai'

import server from '../../../__mocks__/utils/server.mock'
import Tile from '../../../src/models/tile.model'
import TileFactory from '../../../__mocks__/factories/tile.factory'

const ENDPOINT = '/tiles'

let testTile
let testTile2

describe('GET ' + ENDPOINT, () => {
  before(async () => {
    await Tile.remove()
    testTile = await Tile.create(TileFactory.generate())
    testTile2 = await Tile.create(TileFactory.generate())
  })

  describe('Get single tile by its id', () => {
    it('should return single tile', done => {
      server
        .get(ENDPOINT + '/' + testTile._id)
        .end((err, res) => {
          const { body, status } = res
          expect(err).to.be.null
          expect(status).to.equal(200)
          expect(body.name).to.equal(testTile.name)
          expect(body.color).to.equal(testTile.color)
          expect(body._id).to.equal(testTile._id.toString())
          expect(body).to.haveOwnProperty('createdAt')
          expect(body).to.haveOwnProperty('updatedAt')
          done()
        })
    })
  })

  describe('Get all tiles', () => {
    it('should return a list of tiles', done => {
      server
        .get(ENDPOINT)
        .end((err, res) => {
          const { body, status } = res
          expect(status).to.equal(200)
          expect(err).to.be.null
          expect(body.length).to.equal(2)
          expect(body[1].name).to.equal(testTile2.name)
          expect(body[1].color).to.equal(testTile2.color)
          expect(body[1]._id).to.equal(testTile2._id.toString())
          expect(body[1]).to.haveOwnProperty('createdAt')
          expect(body[1]).to.haveOwnProperty('updatedAt')

          expect(body[0].name).to.equal(testTile.name)
          expect(body[0].color).to.equal(testTile.color)
          expect(body[0]._id).to.equal(testTile._id.toString())
          expect(body[0]).to.haveOwnProperty('createdAt')
          expect(body[0]).to.haveOwnProperty('updatedAt')
          done()
        })
    })
  })
})
