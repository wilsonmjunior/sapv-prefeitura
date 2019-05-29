'use strict'

const Localidade = use('App/Models/Localidade')

class LocalidadeController {
  async index () {
    const localidades = Localidade.all()

    return localidades
  }

  async store ({ request }) {
    const data = request.only(['nome', 'estado', 'distancia'])

    const localidade = await Localidade.create(data)

    return localidade
  }

  async show ({ params }) {
    const localidade = Localidade.findOrFail(params.id)

    return localidade
  }

  async update ({ params, request }) {
    const localidade = await Localidade.findOrFail(params.id)
    const data = request.only(['nome', 'estado', 'distancia'])

    localidade.merge(data)

    await localidade.save()

    return localidade
  }

  async destroy ({ params }) {
    const localidade = await Localidade.findOrFail(params.id)

    try {
      await localidade.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = LocalidadeController
