'use strict'

class Especialidade {
  get validateAll () {
    return true
  }

  get rules () {
    const id = this.ctx.params.id
    return {
      nome:
        id > 0
          ? `required|unique:especialidades,nome,id,${id}`
          : 'required|unique:especialidades'
    }
  }

  get messages () {
    return {
      'nome.required': 'Nome da especialidade deve ser informado',
      'nome.unique': 'Já existe uma especialidade com este nome'
    }
  }
}

module.exports = Especialidade
