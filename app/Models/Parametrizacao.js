'use strict'

const Model = use('Model')

class Parametrizacao extends Model {
  static get table () {
    return 'parametrizacao'
  }
}

module.exports = Parametrizacao
