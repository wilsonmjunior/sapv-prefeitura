'use strict'
const Bloqueio = use('App/Models/Bloqueio')

class BloqueioController {
  async index () {
    const bloqueios = await Bloqueio.query()
      .with('veiculo')
      .fetch()

    return bloqueios
  }

  async store ({ request }) {
    const data = request.only([
      'veiculo_id',
      'observacoes',
      'motivo',
      'data_de_bloqueio',
      'data_previsao_retorno',
      'quilometragem_baixa',
      'quilometragem_saida',
      'numero_baixa',
      'data_baixa'
    ])

    const bloqueio = await Bloqueio.create(data)

    return bloqueio
  }

  async findByVeiculo ({ params }) {
    const bloqueios = await Bloqueio.query()
      .where('veiculo_id', params.id)
      .fetch()

    return bloqueios
  }

  async show ({ params }) {
    const bloqueio = Bloqueio.findOrFail(params.id)

    return bloqueio
  }

  async update ({ params, request }) {
    const bloqueio = await Bloqueio.findOrFail(params.id)

    const data = request.only([
      'veiculo_id',
      'observacoes',
      'motivo',
      'data_de_bloqueio',
      'data_retorno',
      'data_previsao_retorno',
      'quilometragem_baixa',
      'quilometragem_saida',
      'quilometragem_retorno',
      'numero_baixa',
      'data_baixa'
    ])

    bloqueio.merge(data)

    await bloqueio.save()

    return bloqueio
  }

  async destroy ({ params, request, response }) {
    const bloqueio = await Bloqueio.findOrFail(params.id)
    try {
      await bloqueio.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = BloqueioController
