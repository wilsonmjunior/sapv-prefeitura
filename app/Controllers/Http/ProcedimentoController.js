'use strict';

const Procedimento = use('App/Models/Procedimento')

class ProcedimentoController {
  async index () {
    const procedimentos = Procedimento.all()

    return procedimentos
  }

  async store ({ request }) {
    const data = request.only(['nome', 'descricao'])

    const procedimento = await Procedimento.create(data)

    return procedimento
  }

  async show ({ params }) {
    const procedimento = await Procedimento.findOrFail(params.id)
    return procedimento
  }

  async update ({ params, request }) {
    const procedimento = await Procedimento.findOrFail(params.id)
    const data = request.only(['nome', 'descricao'])

    procedimento.merge(data)

    await procedimento.save()

    return procedimento
  }

  async destroy ({ params }) {
    const procedimento = await Procedimento.findOrFail(params.id)

    await procedimento.delete()
  }
}

module.exports = ProcedimentoController
