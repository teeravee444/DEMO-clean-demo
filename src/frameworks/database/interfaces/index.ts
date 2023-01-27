// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICollections {}

export interface IModel<IData> {
  find(filter: { [x: string]: any }): Promise<IData[]>
  findById(id: string): Promise<IData | null>
  findOne(filter: { [x: string]: any }): Promise<IData | null>
  deleteById(id: string): Promise<IData | null>
  updateById(id: string, data: IData): Promise<IData | null>
  insert(data: IData): Promise<IData>
  upsert(data: IData): Promise<IData>
}

export interface IDatabase {
  getModel(name: keyof ICollections): IModel<ICollections[keyof ICollections]>
  connect(): void
}
