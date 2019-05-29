'use strict'

class Veiculo {
  get validateAll () {
    return true
  }

  get rules () {
    const id = this.ctx.params.id
    return {
      numero:
        id > 0
          ? `required|number|unique:veiculos,numero,id,${id}`
          : 'required|number|unique:veiculos',
      marca: 'required',
      modelo: 'required',
      placa:
        id > 0
          ? `required|min:7|unique:veiculos,placa,id,${id}`
          : 'required|min:7|unique:veiculos',
      ano: 'required|number|anoValido',
      capacidade: 'required|number',
      quilometragem_atual: 'required|number'
    }
  }

  get messages () {
    return {
      'numero.required': 'O número do veículo não foi informado',
      'numero.number': 'O número informado está inválido',
      'numero.unique': 'O número informado já se encontra cadastrado',
      'marca.required': 'A marca não foi informada',
      'modelo.required': 'O modelo não foi informado',
      'placa.required': 'A placa não foi informada',
      'placa.min': 'A placa foi informada incorretamente',
      'placa.unique': 'A placa informada já se encontra cadastrada',
      'ano.required': 'O ano não foi informado',
      'ano.number': 'O ano informado está inválido',
      'ano.anoValido': 'O ano foi informado incorretamente',
      'capacidade.required': 'A capacidade do veículo não foi informada',
      'capacidade.number': 'A capacidade foi informada incorretamente',
      'quilometragem_atual.required':
        'A quilometragem do veículo não foi informada',
      'quilometragem_atual.number':
        'A quilometragem foi informada incorretamente'
    }
  }
}

module.exports = Veiculo
