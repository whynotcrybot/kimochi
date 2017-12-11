import faker from 'faker'

import BaseFactory from './base.factory'

class TileFactory extends BaseFactory {
  /**
   * Create a tile
   *
   * @public
   * @param {Object} attrs of tile
   * @returns {Object} a fake tile
   */
  generate (attrs) {
    return {
      name: faker.lorem.words(6),
      color: faker.internet.color(),
      ...attrs
    }
  }
}

export default new TileFactory()
