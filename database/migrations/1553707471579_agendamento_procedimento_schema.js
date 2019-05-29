'use strict'

const Schema = use('Schema')

class AgendamentoProcedimentoSchema extends Schema {
  up () {
    this.create('agendamento_procedimento', table => {
      table.increments()
      table
        .integer('agendamento_id')
        .unsigned()
        .index('agendamento_id')
        .references('id')
        .inTable('agendamentos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('procedimento_id')
        .unsigned()
        .index('procedimento_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('agendamento_procedimento')
  }
}

module.exports = AgendamentoProcedimentoSchema
