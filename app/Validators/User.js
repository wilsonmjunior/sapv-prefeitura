'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    const id = this.ctx.params.id

    return {
      username:
        id > 0
          ? `required|unique:users, username,id,${id}`
          : 'required|unique:users',
      email:
        id > 0
          ? `required|email|unique:users, email,id,${id}`
          : 'required|email|unique:users',
      password: 'required|min:6'
    }
  }

  get messages () {
    return {
      'username.required': 'Usuário deve ser infomado',
      'username.unique': 'Nome de usuário já se encontra em uso',
      'email.required': 'Email deve ser informado',
      'email.email': 'Email foi informado incorretamente',
      'email.unique': 'Email já se encontra em uso',
      'password.required': 'A senha deve ser informada',
      'password.min': 'A senha deve ter no mínimo 6 caracteres'
    }
  }
}

module.exports = User
