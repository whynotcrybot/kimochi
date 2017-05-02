import supertest from 'supertest'

import server from '../../src'
import '../../src/config/database'

export default supertest(server)
