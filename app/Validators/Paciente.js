'use strict'

class Paciente {
  get validateAll () {
    return true
  }

  get rules () {
    const id = this.ctx.params.id

    return {
      nome: 'required',
      rg:
        id > 0
          ? `min:8|max:9|unique:pacientes,rg,id,${id}`
          : 'min:8|max:9|unique:pacientes',
      cpf:
        id > 0
          ? `min:11|isvalid|unique:pacientes,cpf,id,${id}`
          : 'min:11|isvalid|unique:pacientes',
      sus:
        id > 0
          ? `min:7|unique:pacientes,sus,id,${id}`
          : 'min:7|unique:pacientes,sus',
      endereco: 'required',
      numero: 'required',
      bairro: 'required',
      cep: 'required|min:8',
      celular: 'required|min:11',
      celular_contato: 'min:11',
      telefone: 'min:10',
      telefone_contato: 'min:10'
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
      'sus.unique':
        'O número do SUS informado já está vinculado a outro cadastro',
      'sus.min': 'O número do SUS foi informado incorretamente',
      'endereco.required': 'O endereço deve ser informado',
      'numero.required': 'O número deve ser informado',
      'bairro.required': 'O bairro deve ser informado',
      'cep.required': 'O CEP deve ser informado',
      'cep.min': 'O CEP foi informado incorretamente',
      'celular.required': 'O número do celular deve ser informado',
      'celular.min': 'O número informado está incorreto',
      'celular_contato.min': 'O número informado está incorreto',
      'telefone.min': 'O número informado está incorreto',
      'telefone_contato.min': 'O número informado está incorreto'
    }
  }
}

module.exports = Paciente
