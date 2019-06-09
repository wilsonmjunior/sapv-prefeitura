'use strict';

const Model = use('Model')

class Agendamento extends Model {
  paciente () {
    return this.belongsTo('App/Models/Paciente')
  }
  localDeConsulta () {
    return this.belongsTo('App/Models/LocalDeConsulta').with('localidade')
  }
  cid () {
    return this.belongsTo('App/Models/Cid')
  }
  especialidade () {
    return this.belongsTo('App/Models/Especialidade')
  }
  viagem () {
    return this.belongsTo('App/Models/Viagem')
      .with('motorista')
      .with('veiculo')
      .with('localidade')
  }
  procedimentos () {
    return this.belongsToMany('App/Models/Procedimento')
  }
}

module.exports = Agendamento
