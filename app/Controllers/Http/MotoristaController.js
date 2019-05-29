'use strict'

const Motorista = use('App/Models/Motorista')

class MotoristaController {
  async index () {
    const motoristas = Motorista.all()

    return motoristas
  }

  async store ({ request }) {
    const data = request.only([
      'nome',
      'cpf',
      'rg',
      'cnh',
      'validade_cnh',
      'endereco',
      'numero',
      'bairro',
      'cep',
      'telefone',
      'celular',
      'celular_coorporativo',
      'dt_admissao',
      'dt_demissao'
    ])

    const motorista = await Motorista.create(data)

    return motorista
  }

  async show ({ params }) {
    const motorista = Motorista.findOrFail(params.id)

    return motorista
  }

  async update ({ params, request }) {
    const motorista = await Motorista.findOrFail(params.id)
    const data = request.only([
      'nome',
      'cpf',
      'rg',
      'cnh',
      'validade_cnh',
      'endereco',
      'numero',
      'bairro',
      'cep',
      'telefone',
      'celular',
      'celular_coorporativo',
      'dt_admissao',
      'dt_demissao'
    ])

    motorista.merge(data)

    await motorista.save()

    return motorista
  }

  async destroy ({ params }) {
    const motorista = await Motorista.findOrFail(params.id)

    try {
      await motorista.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = MotoristaController
