'use strict'

const Model = use('Model')

class Procedimento extends Model {
  agendamentos () {
    return this.belongsToMany('App/Models/Agendamento')
  }
}

module.exports = Procedimento
