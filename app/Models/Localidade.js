'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Localidade extends Model {
  locaisDeConsulta () {
    return this.belongsToMany('App/Models/LocalDeConsulta')
  }
  viagens () {
    return this.hasMany('App/Models/Viagem')
  }
}

module.exports = Localidade
