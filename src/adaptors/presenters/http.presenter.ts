export class HTTPResponse<IResponseData = any> {
  status? = 200
  message?: string
  data?: IResponseData

  constructor({
    status = 200,
    message = undefined,
    data = undefined,
  }: HTTPResponse<IResponseData>) {
    this.status = status
    this.message = message
    this.data = data
  }
}

type HTTPRequestPayload = {
  body?: any
  params?: any
  query?: any
  auth?: any
}
export class HTTPRequest<IHTTPRequestPayload = HTTPRequestPayload> {
  body?: HTTPRequestPayload['body'] = undefined
  params?: HTTPRequestPayload['params'] = undefined
  query?: HTTPRequestPayload['query'] = undefined
  auth?: HTTPRequestPayload['auth'] = undefined

  constructor(req: HTTPRequestPayload & IHTTPRequestPayload) {
    this.auth = req.auth
    this.body = req.body
    this.params = req.params
    this.query = req.query
  }
}
