'use strict'

const Model = use('Model')

class Cid extends Model {
  especialidade () {
    return this.belongsTo('App/Models/Especialidade')
  }
  agendamentos () {
    return this.belongsToMany('App/Models/Agendamento')
  }
}

module.exports = Cid
