'use strict'

class Viagem {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      localidade_id: 'required',
      veiculo_id: 'required',
      motorista_id: 'required',
      data: 'required',
      horario: 'required'
    }
  }
  get messages () {
    return {
      'localidade_id.required': 'A localidade deve ser informada',
      'veiculo_id.required': 'O veiculo deve ser informado',
      'motorista_id.required': 'O motorista deve ser informado',
      'data.required': 'A data deve ser informado',
      'horario.required': 'O horario deve ser informado'
    }
  }
}

module.exports = Viagem
