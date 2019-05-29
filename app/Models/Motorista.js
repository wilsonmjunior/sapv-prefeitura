'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Motorista extends Model {
  viagens () {
    return this.hasMany('App/Models/Viagem')
  }
}

module.exports = Motorista
