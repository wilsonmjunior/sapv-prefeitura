'use strict'

class Session {
  validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'E-mail não foi informado',
      'email.email': 'E-mail não foi informado corretamente',
      'password.required': 'Senha não foi informada'
    }
  }
}

module.exports = Session
