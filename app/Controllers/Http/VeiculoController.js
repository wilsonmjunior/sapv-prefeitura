'use strict'

const Veiculo = use('App/Models/Veiculo')

class VeiculoController {
  async index () {
    const veiculos = Veiculo.all()

    return veiculos
  }

  async store ({ request }) {
    const data = request.all()

    const veiculo = await Veiculo.create(data)

    return veiculo
  }

  async show ({ params }) {
    const veiculo = Veiculo.findOrFail(params.id)

    return veiculo
  }

  async update ({ params, request }) {
    const veiculo = await Veiculo.findOrFail(params.id)
    const data = request.only([
      'numero',
      'marca',
      'modelo',
      'placa',
      'ano',
      'capacidade',
      'bloqueio_ativo',
      'quilometragem_atual',
      'quilometragem_anterior'
    ])

    veiculo.merge(data)

    await veiculo.save()

    return veiculo
  }

  async destroy ({ params }) {
    const veiculo = await Veiculo.findOrFail(params.id)

    try {
      await veiculo.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = VeiculoController
