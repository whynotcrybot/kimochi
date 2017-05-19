import faker from 'faker'

import BaseFactory from './base.factory'

class DayFactory extends BaseFactory {

  /**
   * Create a day
   * @param {Object} attrs of tile
   * @returns {Object} a fake day
   */

  generate (attrs) {
    const date = faker.date.past()
    const parseMonth = x => x < 10 ? '0' + x : x
    return {
      date: date.getFullYear() + '-' + parseMonth(date.getMonth() + 1) + '-' + date.getDate(),
      ...attrs
    }
  }
}

export default new DayFactory()
