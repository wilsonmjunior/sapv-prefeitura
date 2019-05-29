'use strict'

const Model = use('Model')

class Movimentacao extends Model {
  static get table () {
    return 'movimentacoes'
  }

  viagem () {
    return this.belongsTo('App/Models/Viagem')
      .with('veiculo')
      .with('localidade')
      .with('motorista')
  }
}

module.exports = Movimentacao
