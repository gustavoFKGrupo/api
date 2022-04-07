import { ServerError } from '../errors'
import { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors/server-error'
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
<<<<<<< HEAD

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
=======
export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
>>>>>>> 31eae82aecd7571c1ebb1ced8a241d91e6739011
