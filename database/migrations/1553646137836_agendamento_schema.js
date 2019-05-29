'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendamentoSchema extends Schema {
  up () {
    this.create('agendamentos', table => {
      table.increments()
      table
        .integer('paciente_id')
        .unsigned()
        .references('id')
        .inTable('pacientes')
      table
        .integer('local_de_consulta_id')
        .unsigned()
        .references('id')
        .inTable('locais_de_consulta')
      table
        .integer('cid_id')
        .unsigned()
        .references('id')
        .inTable('cids')
      table
        .integer('especialidade_id')
        .unsigned()
        .references('id')
        .inTable('especialidades')
      table
        .integer('viagem_id')
        .unsigned()
        .references('id')
        .inTable('viagens')

      table.time('horario')
      table.date('data')
      table.string('presenca')
      table.string('acompanhante')

      table.timestamps()
    })
  }

  down () {
    this.drop('agendamentos')
  }
}

module.exports = AgendamentoSchema
