'use strict'

const Paciente = use('App/Models/Paciente')

class PacienteController {
  async index () {
    const pacientes = Paciente.all()

    return pacientes
  }

  async store ({ request }) {
    const data = request.only([
      'nome',
      'cpf',
      'endereco',
      'bairro',
      'numero',
      'cep',
      'telefone',
      'telefone_contato',
      'celular',
      'celular_contato'
    ])

    const paciente = await Paciente.create(data)

    return paciente
  }

  async show ({ params }) {
    const paciente = Paciente.findOrFail(params.id)

    return paciente
  }

  async update ({ params, request }) {
    const paciente = await Paciente.findOrFail(params.id)
    const data = request.only([
      'nome',
      'cpf',
      'endereco',
      'bairro',
      'numero',
      'cep',
      'telefone',
      'telefone_contato',
      'celular',
      'celular_contato'
    ])

    paciente.merge(data)

    await paciente.save()

    return paciente
  }

  async destroy ({ params }) {
    const paciente = await Paciente.findOrFail(params.id)

    await paciente.delete()
  }
}

module.exports = PacienteController
