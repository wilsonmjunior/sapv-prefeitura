'use strict'

const Especialidade = use('App/Models/Especialidade')

class EspecialidadeController {
  async index () {
    const especialidades = Especialidade.all()

    return especialidades
  }

  async store ({ request }) {
    const data = request.all()

    const especialidade = await Especialidade.create(data)

    return especialidade
  }

  async show ({ params }) {
    const especialidade = Especialidade.findOrFail(params.id)

    return especialidade
  }

  async update ({ params, request }) {
    const especialidade = await Especialidade.findOrFail(params.id)

    const data = request.only(['nome', 'descricao'])

    especialidade.merge(data)

    await especialidade.save()

    return especialidade
  }

  async destroy ({ params }) {
    const especialidade = await Especialidade.findOrFail(params.id)
    try {
      await especialidade.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = EspecialidadeController
