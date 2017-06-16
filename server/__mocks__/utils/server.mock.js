import supertest from 'supertest'

import server from '../../source'
import '../../source/config/database'

export default supertest(server)
