import { injectable } from 'inversify'
import { ICollections, IDatabase, IModel } from '../interfaces'

@injectable()
export class InMemoryDatabase implements IDatabase {
  private models: Record<keyof ICollections, IModel<ICollections[keyof ICollections]>> = {}

  connect(): void {
    console.warn('Server running with memory database.')
  }
  getModel(name: keyof ICollections): IModel<ICollections[keyof ICollections]> {
    return this.models[name]
  }
}
