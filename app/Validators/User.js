'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }

  get messages () {
    return {
      'username.required': 'Usuário deve ser infomado',
      'username.unique': 'Nome de usuário já se encontra em uso',
      'email.required': 'Email deve ser informado',
      'email.email': 'Email foi informado incorretamente',
      'email.unique': 'Email já se encontra em uso',
      'password.required': 'Senha deve ser informada',
      'password.confirmed': 'Senhas informadas não conferem'
    }
  }
}

module.exports = User
