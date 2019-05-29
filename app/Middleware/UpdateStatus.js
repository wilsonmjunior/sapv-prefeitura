'use strict'
const Database = use('Database')
const moment = use('moment')

class UpdateStatus {
  async handle ({ request }, next) {
    const dataAtual = moment(moment()).format('YYYY-MM-DD')
    const horario = moment(moment()).format('HH:mm')

    const trx = await Database.beginTransaction()

    await trx
      .table('viagens')
      .where('status', 'Agendada')
      .where('data', '<=', dataAtual)
      .where('horario', '<=', horario)
      .update('status', 'Não Realizada')

    await trx.commit()
    await trx.rollback()

    await next()
  }
}

module.exports = UpdateStatus
