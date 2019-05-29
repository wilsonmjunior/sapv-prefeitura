'use strict'

const Model = use('Model')

class Especialidade extends Model {
  cids () {
    return this.hasMany('App/Models/Cid')
  }
  agendamentos () {
    return this.hasMany('App/Models/Agendamento')
  }
}

module.exports = Especialidade
