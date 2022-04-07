export class ServerError extends Error {
  constructor () {
<<<<<<< HEAD
    super('Erro interno de servidor, tente novamente mais tarde')
=======
    super('Internal server error')
>>>>>>> 31eae82aecd7571c1ebb1ced8a241d91e6739011
    this.name = 'ServerError'
  }
}
