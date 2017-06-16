/* global describe it before beforeEach */
import { expect } from 'chai'

import server from '../../../__mocks__/utils/server.mock'
import Tile from '../../../source/models/tile.model'
import Day from '../../../source/models/day.model'
import TileFactory from '../../../__mocks__/factories/tile.factory'
import DayFactory from '../../../__mocks__/factories/day.factory'

const ENDPOINT = '/days'

let testTile
let testDay

describe('DELETE ' + ENDPOINT, () => {
  before(async () => {
    await Tile.remove()
    await Day.remove()
    testTile = await Tile.create(TileFactory.generate())
  })

  beforeEach(() => {
    testDay = DayFactory.generate({tile: testTile._id})
  })

  describe('Delete', () => {
    it('should delete a day', done => {
      server
        .delete(ENDPOINT + '/' + testDay.date)
        .end((err, res) => {
          expect(err).to.be.null
          expect(res.status).to.equal(200)
          done()
        })
    })
  })
})
