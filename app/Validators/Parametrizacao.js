'use strict'

class Parametrizacao {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nome_empresa: 'required',
      expediente_inicio: 'required',
      expediente_fim: 'required',
      logo: 'required',
      endereco: 'required',
      bairro: 'required',
      numero: 'required',
      telefone: 'required|min:10'
    }
  }
  get messages () {
    return {
      'nome_empresa.required': 'O nome da empresa deve ser informado',
      'expediente_inicio.required':
        'O horário que se inicia o expediente deve ser informado',
      'expediente_fim.required':
        'O horário que encerra o expediente deve ser informado',
      'logo.required': 'O logo deve ser informado',
      'endereco.required': 'O endereço deve ser informado',
      'bairro.required': 'O bairro deve ser informado',
      'numero.required': 'O número deve ser informado',
      'telefone.required': 'O telefone deve ser informado'
    }
  }
}

module.exports = Parametrizacao
