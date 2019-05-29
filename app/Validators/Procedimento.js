'use strict'

class Procedimento {
  get validateAll () {
    return true
  }

  get rules () {
    const id = this.ctx.params.id
    return {
      nome:
        id > 0
          ? `required|unique:procedimentos,nome,id,${id}`
          : 'required|unique:procedimentos'
    }
  }

  get messages () {
    return {
      'nome.required': 'Nome do Procedimento deve ser informado',
      'nome.unique': 'Já existe um Procedimento com este nome'
    }
  }
}

module.exports = Procedimento
