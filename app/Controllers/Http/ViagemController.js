/* eslint-disable eqeqeq */
'use strict'
const Viagem = use('App/Models/Viagem')

class ViagemController {
  async index () {
    const viagens = await Viagem.query()
      .with('motorista')
      .with('veiculo')
      .with('localidade')
      .fetch()

    return viagens
  }

  async store ({ request }) {
    const data = request.only([
      'data',
      'horario',
      'localidade_id',
      'motorista_id',
      'veiculo_id',
      'status',
      'tipo'
    ])

    const viagem = await Viagem.create(data)

    return viagem
  }

  async show ({ params }) {
    const viagem = await Viagem.findOrFail(params.id)

    await viagem.load('localidade')
    await viagem.load('motorista')
    await viagem.load('veiculo')
    await viagem.load('agendamentos')

    return viagem
  }
  async findByVeiculoStatus ({ params }) {
    const viagem = await Viagem.query()
      .where('veiculo_id', params.id)
      .where('status', params.status)
      .first()

    return viagem
  }
  async findByLocalidadeData ({ params, request }) {
    const { data } = request.all()
    const localidade = params.id

    if (localidade == 0) {
      return Viagem.query()
        .with('localidade')
        .with('motorista')
        .with('veiculo')
        .where('data', data)
        .where('tipo', 'Fixa')
        .fetch()
    } else {
      return Viagem.query()
        .with('localidade')
        .with('motorista')
        .with('veiculo')
        .where('data', data)
        .where('localidade_id', localidade)
        .where('tipo', 'Fixa')
        .fetch()
    }
  }
  async findByVeiculoData ({ params, request }) {
    const { dateIni, dateFin, horario, id } = request.all()
    const veiculo = params.id

    if (dateIni && veiculo == 0) {
      return Viagem.query()
        .with('localidade')
        .with('motorista')
        .with('veiculo')
        .where('data', dateIni)
        .where('status', 'Agendada')
        .fetch()
    }

    if (!dateIni && !dateFin && !horario && veiculo !== 0) {
      return Viagem.query()
        .with('localidade')
        .with('motorista')
        .where('veiculo_id', veiculo)
        .where('status', 'Agendada')
        .where('id', '!=', id)
        .fetch()
    }
    if (!horario && veiculo !== 0) {
      return Viagem.query()
        .with('localidade')
        .with('motorista')
        .where('data', '>=', dateIni)
        .where('data', '<=', dateFin)
        .where('veiculo_id', veiculo)
        .where('status', 'Agendada')
        .where('id', '!=', id)
        .fetch()
    }

    return Viagem.query()
      .with('localidade')
      .where('data', '>=', dateIni)
      .where('data', '<=', dateFin)
      .where('horario', horario)
      .where('veiculo_id', veiculo)
      .where('status', 'Agendada')
      .where('id', '!=', id)
      .fetch()
  }

  async findByMotoristaData ({ params, request }) {
    const { dateIni, dateFin, id } = request.all()
    const motorista = params.id

    const viagens = Viagem.query()
      .where('data', '>=', dateIni)
      .where('data', '<=', dateFin)
      .where('motorista_id', motorista)
      .where('id', '!=', id)
      .fetch()

    return viagens
  }

  async findByPeriodo ({ request }) {
    const { dateIni, dateFin } = request.all()

    const viagens = Viagem.query()
      .with('localidade')
      .with('veiculo')
      .with('motorista')
      .where('data', '>=', dateIni)
      .where('data', '<=', dateFin)
      .fetch()

    return viagens
  }

  async update ({ params, request }) {
    const viagem = await Viagem.findOrFail(params.id)
    const data = request.only([
      'data',
      'horario',
      'localidade_id',
      'motorista_id',
      'veiculo_id',
      'status'
    ])

    viagem.merge(data)

    await viagem.save()

    return viagem
  }

  async destroy ({ params }) {
    const viagem = await Viagem.findOrFail(params.id)
    try {
      await viagem.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = ViagemController
