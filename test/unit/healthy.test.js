/* global describe it */
import {expect} from 'chai'
import Healthy from '../../controllers/healthy.controller'

describe('healthy', () => {
  it('should return message OK', (done) => {
    expect(Healthy.healthy()).to.eql({message: 'OK'})
    done()
  })
})
