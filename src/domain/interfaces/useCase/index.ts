export interface IUseCase<IParam, IResult> {
  execute(param: IParam): Promise<IResult>
}
