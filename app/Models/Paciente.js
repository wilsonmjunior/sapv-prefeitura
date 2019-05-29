'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Paciente extends Model {
  agendamentos () {
    return this.belongsToMany('App/Models/Agendamento')
  }
}

module.exports = Paciente
