import container from '@/configs/dependencies'
import { IEnvironment } from '@/configs/environment'
import express from 'express'
import morgan from 'morgan'
import { apiRouter } from './api'

const app = express()

const env: IEnvironment = container.get('Environment')

app.use(morgan('dev'))
app.use(express.json())

app.use(env.get('API_VERSION'), apiRouter)

export default app
