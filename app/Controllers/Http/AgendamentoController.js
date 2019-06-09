/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
'use strict';
const Database = use('Database')
const Agendamento = use('App/Models/Agendamento')

class AgendamentoController {
  async index () {
    const agendamentos = await Agendamento.query()
      .with('paciente')
      .with('localDeConsulta')
      .with('cid')
      .with('viagem')
      .with('especialidade')
      .fetch()

    return agendamentos
  }

  async store ({ request }) {
    const data = request.only([
      'paciente_id',
      'local_de_consulta_id',
      'cid_id',
      'especialidade_id',
      'viagem_id',
      'horario',
      'data',
      'presenca',
      'acompanhante'
    ])
    const { procedimentos } = request.only(['procedimentos'])

    const agendamento = await Agendamento.create(data)

    await agendamento.procedimentos().attach(procedimentos)
    agendamento.procedimentos = await agendamento.procedimentos().fetch()

    return agendamento
  }

  async update ({ params, request }) {
    const agendamento = await Agendamento.findOrFail(params.id)
    const data = request.only([
      'paciente_id',
      'local_de_consulta_id',
      'cid_id',
      'especialidade_id',
      'viagem_id',
      'horario',
      'data',
      'presenca',
      'acompanhante'
    ])
    const { procedimentos } = request.only(['procedimentos'])

    agendamento.merge(data)

    await agendamento.save()

    agendamento.procedimentos().sync(procedimentos)
    agendamento.procedimentos = await agendamento.procedimentos().fetch()

    return agendamento
  }

  async show ({ params }) {
    const agendamento = await Agendamento.findOrFail(params.id)

    await agendamento.loadMany([
      'paciente',
      'localDeConsulta',
      'cid',
      'especialidade',
      'viagem'
    ])
    agendamento.procedimentos = await agendamento.procedimentos().fetch()

    return agendamento
  }

  async findByViagem ({ params }) {
    const agendamentos = Agendamento.query()
      .with('paciente')
      .with('localDeConsulta')
      .with('cid')
      .with('especialidade')
      .with('procedimentos')
      .where('viagem_id', params.id)
      .fetch()

    return agendamentos
  }

  async findByProcedimento ({ params, request }) {
    const { dataIni, dataFin, localidadeId } = request.all()

    if (params.id == 0) {
      return Agendamento.query()
        .with('procedimentos')
        .with('paciente')
        .with('especialidade')
        .with('localDeConsulta')
        .with('cid')
        .where('data', '>=', dataIni)
        .where('data', '<=', dataFin)
        .fetch()
    }
    if (params.id > 0) {
      return Agendamento.query()
        .with('procedimentos')
        .with('paciente')
        .with('especialidade')
        .with('localDeConsulta')
        .with('cid')
        .innerJoin(
          'agendamento_procedimento',
          'agendamentos.id',
          'agendamento_procedimento.agendamento_id'
        )
        .where('data', '>=', dataIni)
        .where('data', '<=', dataFin)
        .where('agendamento_procedimento.procedimento_id', params.id)
        .fetch()
    }

    return Agendamento.query()
      .with('procedimentos')
      .with('paciente')
      .with('especialidade')
      .with('localDeConsulta')
      .with('cid')
      .innerJoin(
        'agendamento_procedimento',
        'agendamentos.id',
        'agendamento_procedimento.agendamento_id'
      )
      .where('data', '>=', dataIni)
      .where('data', '<=', dataFin)
      .where('localidade_id', localidadeId)
      .where('agendamento_procedimento.procedimento_id', params.id)
      .fetch()
  }

  async findByEspecialidade ({ params, request }) {
    const { dataIni, dataFin, localidadeId } = request.all()

    if (params.id == 0) {
      return Agendamento.query()
        .with('procedimentos')
        .with('paciente')
        .with('especialidade')
        .with('localDeConsulta')
        .with('cid')
        .where('data', '>=', dataIni)
        .where('data', '<=', dataFin)
        .fetch()
    }
    if (params.id > 0) {
      return Agendamento.query()
        .with('procedimentos')
        .with('paciente')
        .with('especialidade')
        .with('localDeConsulta')
        .with('cid')
        .where('data', '>=', dataIni)
        .where('data', '<=', dataFin)
        .where('especialidade_id', params.id)
        .fetch()
    }

    return Agendamento.query()
      .with('procedimentos')
      .with('paciente')
      .with('especialidade')
      .with('localDeConsulta')
      .with('cid')
      .where('especialidade_id', params.id)
      .where('localidade_id', localidadeId)
      .where('data', '>=', dataIni)
      .where('data', '<=', dataFin)
      .fetch()
  }

  async findByCid ({ params, request }) {
    const { dataIni, dataFin, cidId } = request.all()

    if (params.id == 0) {
      return Agendamento.query()
        .with('cid')
        .with('procedimentos')
        .with('paciente')
        .with('especialidade')
        .with('localDeConsulta')
        .where('data', '>=', dataIni)
        .where('data', '<=', dataFin)
        .fetch()
    }
    if (params.id > 0) {
      return Agendamento.query()
        .with('cid')
        .with('procedimentos')
        .with('paciente')
        .with('especialidade')
        .with('localDeConsulta')
        .where('data', '>=', dataIni)
        .where('data', '<=', dataFin)
        .where('cid_id', params.id)
        .fetch()
    }

    return Agendamento.query()
      .with('cid')
      .with('procedimentos')
      .with('paciente')
      .with('especialidade')
      .with('localDeConsulta')
      .where('cid_id', params.id)
      .where('localidade_id', cidId)
      .where('data', '>=', dataIni)
      .where('data', '<=', dataFin)
      .fetch()
  }

  async findByPaciente ({ params, request }) {
    const paciente = params.id
    const { data, agendamentoId } = request.all()
    console.log(paciente, data, agendamentoId)

    if (agendamentoId) {
      return Agendamento.query()
        .with('paciente')
        .with('localDeConsulta')
        .with('cid')
        .with('especialidade')
        .with('procedimentos')
        .where('data', data)
        .where('paciente_id', paciente)
        .where('id', '!=', agendamentoId)
        .fetch()
    }
    console.log('passou')

    return Agendamento.query()
      .with('paciente')
      .with('localDeConsulta')
      .with('cid')
      .with('especialidade')
      .with('procedimentos')
      .where('data', data)
      .where('paciente_id', paciente)
      .fetch()
  }

  async destroy ({ params }) {
    const agendamento = await Agendamento.findOrFail(params.id)

    try {
      await agendamento.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = AgendamentoController
