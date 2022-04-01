export class ServerError extends Error {
  constructor () {
    super('Erro interno de servidor, tente novamente mais tarde')
    this.name = 'ServerError'
  }
}
