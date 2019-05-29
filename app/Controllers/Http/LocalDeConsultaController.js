'use strict'

const LocalDeConsulta = use('App/Models/LocalDeConsulta')

class LocalDeConsultaController {
  async index () {
    const locais = LocalDeConsulta.query()
      .with('localidade')
      .fetch()

    return locais
  }
  async findByLocalidade ({ params }) {
    const locais = LocalDeConsulta.query()
      .where('localidade_id', params.id)
      .fetch()

    return locais
  }
  async store ({ request }) {
    const data = request.only([
      'nome',
      'localidade_id',
      'endereco',
      'bairro',
      'numero',
      'telefone',
      'celular',
      'cep',
      'descricao'
    ])

    const local = await LocalDeConsulta.create(data)

    return local
  }

  async show ({ params }) {
    const local = LocalDeConsulta.findOrFail(params.id)

    return local
  }

  async update ({ params, request }) {
    const local = await LocalDeConsulta.findOrFail(params.id)
    const data = request.only([
      'nome',
      'localidade_id',
      'endereco',
      'bairro',
      'numero',
      'telefone',
      'celular',
      'cep',
      'descricao'
    ])

    local.merge(data)

    await local.save()

    return local
  }

  async destroy ({ params }) {
    const local = await LocalDeConsulta.findOrFail(params.id)

    await local.delete()
  }
}

module.exports = LocalDeConsultaController
