import { IEnvironment } from '@/configs/environment'
import { inject, injectable } from 'inversify'
import mongoose from 'mongoose'
import { ICollections, IDatabase, IModel } from '../interfaces'

@injectable()
export class MongoDatabase implements IDatabase {
  private models: Record<keyof ICollections, IModel<ICollections[keyof ICollections]>> = {}

  constructor(@inject('Environment') private env: IEnvironment) {}

  connect(): void {
    const DATABASE_URL = this.env.get('DATABASE_URL')
    mongoose.connect(DATABASE_URL)
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connection has been established.')
    })
    mongoose.connection.on('error', () => {
      console.error.bind(console, 'Connection to MongoDB has failed.')
    })
  }

  getModel(name: keyof ICollections): IModel<ICollections[keyof ICollections]> {
    return this.models[name]
  }
}
