import 'module-alias/register'
import 'reflect-metadata'
import { createServer } from 'http'

import container from './configs/dependencies'
import { IEnvironment } from './configs/environment'
import app from './frameworks/express/app'
import { IDatabase } from './frameworks/data/interfaces'

const env = container.get<IEnvironment>('Environment')
const database = container.get<IDatabase>('Database')

const PORT = env.get('PORT')
const server = createServer(app)

server.listen(PORT, () => {
  console.log('Server running on port:', PORT)
  database.connect()
})
