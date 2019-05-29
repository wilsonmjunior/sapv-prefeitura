'use strict'

const Model = use('Model')

class Viagem extends Model {
  static get table () {
    return 'viagens'
  }
  localidade () {
    return this.belongsTo('App/Models/Localidade')
  }

  veiculo () {
    return this.belongsTo('App/Models/Veiculo')
  }

  motorista () {
    return this.belongsTo('App/Models/Motorista')
  }
  agendamentos () {
    return this.hasMany('App/Models/Agendamento')
      .with('localDeConsulta')
      .with('especialidade')
      .with('cid')
      .with('paciente')
      .with('procedimentos')
  }

  viagem () {
    return this.hasOne('App/Models/viagem')
  }
}

module.exports = Viagem
