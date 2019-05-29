'use strict'

class Localidade {
  get validateAll () {
    return true
  }
  get rules () {
    const localidade = this.ctx.request.only(['id', 'nome', 'estado'])

    return {
      nome:
        localidade.id > 0
          ? `required|unique:localidades,nome,estado,${localidade.estado},id,
            ${localidade.id}`
          : `required|unique:localidades,nome`,
      estado: 'required',
      distancia: 'required'
    }
  }

  get messages () {
    return {
      'nome.required': 'O nome da localidade deve ser informada',
      'nome.unique': 'Está localidade já se encontra cadastrada',
      'estado.required': 'O estado da localidade deve ser informado',
      'distancia.required': 'A distância até a localidade deve ser informada',
      'distancia.float': 'O valor informado da distância está incorreto'
    }
  }
}

module.exports = Localidade
