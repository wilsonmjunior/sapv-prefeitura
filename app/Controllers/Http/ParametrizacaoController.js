/* eslint-disable eqeqeq */
'use strict'

const Parametrizacao = use('App/Models/Parametrizacao')

class ParametrizacaoController {
  async store ({ request }) {
    const data = request.all()

    const parametro = await Parametrizacao.create(data)

    return parametro
  }
  async update ({ params, request }) {
    const parametro = await Parametrizacao.findOrFail(params.id)
    const data = request.all()

    parametro.merge(data)

    await parametro.save(parametro)

    return parametro
  }
  async show ({ params }) {
    const id = params.id

    if (id == 0) {
      return Parametrizacao.all()
    }
    return Parametrizacao.findOrFail(id)
  }
}

module.exports = ParametrizacaoController
