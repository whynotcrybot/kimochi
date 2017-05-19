/* global describe it before */
import { expect } from 'chai'

import server from '../../../__mocks__/utils/server.mock'
import Tile from '../../../src/models/tile.model'
import Day from '../../../src/models/day.model'
import TileFactory from '../../../__mocks__/factories/tile.factory'
import DayFactory from '../../../__mocks__/factories/day.factory'

const ENDPOINT = '/days'

let testTile
let testDay
let testDay2

describe('GET ' + ENDPOINT, () => {
  before(async () => {
    await Tile.remove()
    await Day.remove()
    testTile = await Tile.create(TileFactory.generate())
    testDay = await Day.create(
      DayFactory.generate({
        date: '2017-04-20',
        tile: testTile._id
      })
    )
    testDay2 = await Day.create(
      DayFactory.generate({
        date: '2017-04-19',
        tile: testTile._id
      })
    )
  })

  // describe('Get single day by its id', () => {
  //   it('should return single day', done => {
  //     server
  //       .get(ENDPOINT + '/' + testDay._id)
  //       .end((err, res) => {
  //         const { body, status } = res
  //         expect(err).to.be.null
  //         expect(status).to.equal(200)
  //
  //         expect(new Date(body.date).toString()).to.equal(new Date(testDay.date).toString())
  //         expect(body.tile.name).to.equal(testTile.name)
  //         expect(body.tile.color).to.equal(testTile.color)
  //         expect(body.tile._id).to.equal(testTile._id.toString())
  //         expect(body).to.haveOwnProperty('createdAt')
  //         expect(body).to.haveOwnProperty('updatedAt')
  //         done()
  //       })
  //   })
  // })

  describe('Get all days', () => {
    it('should return a list of days', done => {
      server
        .get(ENDPOINT)
        .end((err, res) => {
          const { body, status } = res

          expect(status).to.equal(200)
          expect(err).to.be.null
          expect(body.length).to.equal(2)

          expect(new Date(body[0].date).toString()).to.equal(new Date(testDay.date).toString())
          expect(body[0].tile.name).to.equal(testTile.name)
          expect(body[0].tile.color).to.equal(testTile.color)
          expect(body[0].tile._id).to.equal(testTile._id.toString())
          expect(body[0]).to.haveOwnProperty('createdAt')
          expect(body[0]).to.haveOwnProperty('updatedAt')

          expect(new Date(body[1].date).toString()).to.equal(new Date(testDay2.date).toString())
          expect(body[1].tile.name).to.equal(testTile.name)
          expect(body[1].tile.color).to.equal(testTile.color)
          expect(body[1].tile._id).to.equal(testTile._id.toString())
          expect(body[1]).to.haveOwnProperty('createdAt')
          expect(body[1]).to.haveOwnProperty('updatedAt')
          done()
        })
    })
  })
})
