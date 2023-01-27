import dotenv from 'dotenv'
import { injectable } from 'inversify'

dotenv.config()

export type EnvKey = 'NODE_ENV' | 'PORT' | 'API_VERSION' | 'DATABASE_URL' | 'DATABASE_PROVIDER'
export interface IEnvironment {
  get(name: EnvKey): string
}

@injectable()
class Environment implements IEnvironment {
  private NODE_ENV = process.env.NODE_ENV || 'develop'
  private PORT = process.env.PORT || '5000'
  private DATABASE_PROVIDER = process.env.DATABASE_PROVIDER || 'InMemory'
  private DATABASE_URL = process.env.DATABASE_URL || ''
  private API_VERSION = process.env.VERSION || '/api/v1'

  get = (name: EnvKey) => {
    return this[name]
  }
}

export default Environment
