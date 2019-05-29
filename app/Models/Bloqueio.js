'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bloqueio extends Model {
  veiculo () {
    return this.belongsTo('App/Models/Veiculo')
  }
}

module.exports = Bloqueio
