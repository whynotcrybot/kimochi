/* global describe it before beforeEach */
import { expect } from 'chai'

import server from '../../../__mocks__/utils/server.mock'
import Tile from '../../../src/models/tile.model'
import Day from '../../../src/models/day.model'
import TileFactory from '../../../__mocks__/factories/tile.factory'
import DayFactory from '../../../__mocks__/factories/day.factory'

const ENDPOINT = '/days'

let testTile
let testDay

describe('POST ' + ENDPOINT, () => {
  before(async () => {
    await Tile.remove()
    await Day.remove()
    testTile = await Tile.create(TileFactory.generate())
  })

  beforeEach(() => {
    testDay = DayFactory.generate({tile: testTile._id})
  })

  describe('Create', () => {
    it('should create a day', done => {
      server
        .post(ENDPOINT)
        .send(testDay)
        .end((err, res) => {
          const { body, status } = res
          expect(err).to.be.null
          expect(status).to.equal(201)
          expect(new Date(body.date).toString()).to.equal(new Date(testDay.date).toString())
          expect(body.tile).to.equal(testTile._id.toString())
          expect(body).to.haveOwnProperty('_id')
          expect(body).to.haveOwnProperty('updatedAt')
          done()
        })
    })
  })
})
