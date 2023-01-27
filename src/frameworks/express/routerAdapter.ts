/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPRequest, HTTPResponse } from '@/adaptors/presenters'
import { Request, Response, NextFunction } from 'express'

export const routerAdaptor = (
  controller: (req: HTTPRequest<any>) => Promise<HTTPResponse<any>>,
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status, message, data } = await controller(req)
      res.status(status || 200).send({
        message: message,
        data: data,
      })
    } catch (error) {
      next(error)
    }
  }
}
