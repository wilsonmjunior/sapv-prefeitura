'use strict'

const Movimentacao = use('App/Models/Movimentacao')
const Database = use('Database')

class MovimentacaoController {
  async index ({ request }) {
    const { movimento } = request.only(['movimento'])
    let movimentos

    if (movimento === 'saida') {
      movimentos = await Movimentacao.query()
        .with('viagem')
        .where('data_retorno', null)
        .fetch()
    } else if (movimento === 'retorno') {
      movimentos = await Movimentacao.query()
        .with('viagem')
        .whereNot('data_retorno', null)
        .fetch()
    } else {
      movimentos = await Movimentacao.query()
        .with('viagem')
        .fetch()
    }
    return movimentos
  }

  async store ({ request }) {
    const data = request.only([
      'data_saida',
      'horario_saida',
      'quilometragem_saida',
      'viagem_id'
    ])

    const movimentacao = await Movimentacao.create(data)

    return movimentacao
  }

  async show ({ params }) {
    const movimentacao = await Movimentacao.findOrFail(params.id)

    await movimentacao.load('viagem')

    return movimentacao
  }
  async findRetornoByVeiculo ({ params, request }) {
    const movimentacao = await Database.table('movimentacoes')
      .select(
        'movimentacoes.id',
        'data_saida',
        'horario_saida',
        'quilometragem_saida',
        'viagem_id'
      )
      .innerJoin('viagens', 'movimentacoes.viagem_id', 'viagens.id')
      .where('viagens.veiculo_id', params.id)
      .where('status', 'Andamento')

    return movimentacao
  }

  async update ({ params, request }) {
    const movimentacao = await Movimentacao.findOrFail(params.id)

    const data = request.only([
      'data_saida',
      'horario_saida',
      'quilometragem_saida',
      'data_retorno',
      'horario_retorno',
      'quilometragem_retorno',
      'viagem_id'
    ])

    movimentacao.merge(data)

    await movimentacao.save()

    return movimentacao
  }

  async destroy ({ params, request, response }) {}
}

module.exports = MovimentacaoController
