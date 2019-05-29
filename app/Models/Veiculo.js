'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Veiculo extends Model {
  bloqueios () {
    return this.hasMany('App/Models/Bloqueio')
  }
  viagens () {
    return this.hasMany('App/Models/Viagem')
  }
}

module.exports = Veiculo
