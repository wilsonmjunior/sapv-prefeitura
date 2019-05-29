'use strict'

class LocalDeConsulta {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nome: 'required',
      localidade_id: 'required',
      endereco: 'required',
      bairro: 'required',
      numero: 'required',
      telefone: 'min:10',
      celular: 'min:11'
    }
  }

  get messages () {
    return {
      'nome.required': 'O nome deve ser informado',
      'localidade_id.required':
        'A localidade do local de consulta deve ser informado',
      'endereco.required': 'O endereço deve ser informado',
      'bairro.required': 'O bairro deve ser informado',
      'numero.required': 'O número deve ser informado',
      'celular.min': 'O número informado está incorreto',
      'telefone.min': 'O número informado está incorreto'
    }
  }
}

module.exports = LocalDeConsulta
