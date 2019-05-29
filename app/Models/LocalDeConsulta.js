'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LocalDeConsulta extends Model {
  static get table () {
    return 'locais_de_consulta'
  }
  localidade () {
    return this.belongsTo('App/Models/Localidade')
  }
  agendamentos () {
    return this.belongsToMany('App/Models/Agendamento')
  }
}

module.exports = LocalDeConsulta
