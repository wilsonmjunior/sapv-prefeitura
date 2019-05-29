'use strict'

const Cid = use('App/Models/Cid')

class CidController {
  async index () {
    const cids = Cid.query()
      .with('especialidade')
      .fetch()

    return cids
  }
  async findByEspecialidade ({ params }) {
    const especialidade = params.especialidade_id

    const cids = Cid.query()
      .where('especialidade_id', especialidade)
      .fetch()

    return cids
  }

  async store ({ request, response }) {
    const data = request.only([
      'nome',
      'codigo',
      'descricao',
      'especialidade_id'
    ])

    const cid = await Cid.create(data)

    return cid
  }

  async show ({ params }) {
    const cid = await Cid.findOrFail(params.id)

    await cid.load('especialidade')

    return cid
  }

  async update ({ params, request }) {
    const cid = await Cid.findOrFail(params.id)
    const data = request.only([
      'nome',
      'codigo',
      'descricao',
      'especialidade_id'
    ])

    cid.merge(data)

    await cid.save()

    return cid
  }

  async destroy ({ params }) {
    const cid = await Cid.findOrFail(params.id)

    await cid.delete()
  }
}

module.exports = CidController
