import faker from 'faker'

import BaseFactory from './base.factory'

class DayFactory extends BaseFactory {
  /**
   * Create a day
   *
   * @public
   * @param {Object} attrs of tile
   * @returns {Object} a fake day
   */
  generate (attrs) {
    const date = faker.date.past()
    return {
      date: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),
      ...attrs
    }
  }
}

export default new DayFactory()
