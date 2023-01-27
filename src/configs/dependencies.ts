/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as Controllers from '@/adaptors/controllers'
import * as Repositories from '@/adaptors/repositories'
import * as Services from '@/adaptors/services'
import * as Database from '@/frameworks/database'
import { Container } from 'inversify'
import Environment, { IEnvironment } from './environment'

const container = new Container()

/* ENVIRONMENT */
container.bind('Environment').to(Environment)

configControllers()
configDatabase()
configRepositories()
configsServices()

/* CONFIG CONTAINERS */
function configControllers() {
  Object.values(Controllers).map((controller: any) => {
    container.bind(controller.name).to(controller)
  })
}

/* CONFIG DATABASE */
function configDatabase() {
  const env: IEnvironment = container.get('Environment')
  switch (env.get('DATABASE_PROVIDER')) {
    case 'mongo':
      container.bind('Database').to(Database.MongoDatabase)
      break
    default:
      container.bind('Database').to(Database.InMemoryDatabase)
  }
}

/* CONFIG REPOSITORIES */
function configRepositories() {
  Object.values(Repositories).map((repository: any) => {
    container.bind(repository.name).to(repository)
  })
}

/* CONFIG SERVICES */
function configsServices() {
  Object.values(Services).map((service: any) => {
    container.bind(service.name).to(service)
  })
}

export default container
