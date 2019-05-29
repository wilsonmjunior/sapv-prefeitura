'use strict'

class Cid {
  get validateAll () {
    return true
  }

  get rules () {
    const id = this.ctx.params.id
    return {
      nome:
        id > 0 ? `required|unique:cids,nome,id,${id}` : 'required|unique:cids',
      codigo:
        id > 0 ? `required|unique:cids,nome,id,${id}` : 'required|unique:cids',
      especialidade_id: 'required'
    }
  }

  get messages () {
    return {
      'nome.unique': 'Já existe um Cid10 com este nome',
      'nome.required': 'Nome do Cid10 deve ser informado',
      'codigo.unique': 'Já existe um Cid10 com este código',
      'codigo.required': 'Codigo do CId10 deve ser informado',
      'especialidade_id.required':
        'A especialidade referente ao Cid10 deve ser informada'
    }
  }
}

module.exports = Cid
