'use strict'

class Motorista {
  get validateAll () {
    return true
  }

  get rules () {
    const id = this.ctx.params.id
    const motorista = this.ctx.request.only(['dt_admissao'])

    return {
      nome: 'required',
      rg: 'min:8|max:9|unique:motoristas',
      cpf:
        id > 0
          ? `min:11|isvalid|unique:motoristas,cpf,id,${id}`
          : 'min:11|isvalid|unique:motoristas',
      cnh:
        id > 0
          ? `required|min:11|unique:motoristas,cnh,id,${id}`
          : 'required|min:11|unique:motoristas',
      validade_cnh: 'required|isValidDateCNH',
      endereco: 'required',
      numero: 'required',
      bairro: 'required',
      cep: 'required|min:8',
      celular: 'required|min:11',
      celular_coorporativo: 'min:11',
      telefone: 'min:10',
      dt_admissao: 'required|isValidDate|admissaoValida',
      dt_demissao: `demissaoValida,${motorista.dt_admissao}`
    }
  }

  get messages () {
    return {
      'nome.required': 'O nome deve ser informado',
      'rg.min': 'O RG informado está inválido',
      'rg.max': 'O RG informado está inválido',
      'rg.unique': 'O RG informado já está vinculado a outro cadastro',
      'cpf.unique': 'O CPF informado já está vinculado a outro cadastro',
      'cpf.min': 'O número do CPF não foi informado corretamente',
      'cpf.isvalid': 'O CPF informado está inválido',
      'cnh.min': 'A CNH informada está inválida',
      'cnh.required': 'A CNH não foi informada',
      'cnh.unique': 'A CNH informada já está vinculada a outro cadastro',
      'validade_cnh.required': 'A data de validade da CNH não foi informada',
      'validade_cnh.isValidDateCNH': 'A data de validade da CNH está inválida',
      'endereco.required': 'O endereço deve ser informado',
      'numero.required': 'O número deve ser informado',
      'bairro.required': 'O bairro deve ser informado',
      'cep.required': 'O CEP deve ser informado',
      'celular.required': 'O número do celular deve ser informado',
      'celular_coorporativo.min': 'O número informado está incorreto',
      'telefone.min': 'O número informado está incorreto',
      'dt_admissao.required': 'A data de Admissão não foi informada',
      'dt_admissao.isValidDate': 'A data de Admissão informada está inválida',
      'dt_admissao.admissaoValida':
        'A data de Admissão não foi informada corretamente',
      'dt_demissao.demissaoValida':
        'A data de Demissão não foi informada corretamente'
    }
  }
}

module.exports = Motorista
