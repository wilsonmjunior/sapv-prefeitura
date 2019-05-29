'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ViagemSchema extends Schema {
  up () {
    this.create('viagens', table => {
      table.increments()
      table
        .integer('localidade_id')
        .unsigned()
        .references('id')
        .inTable('localidades')
      table
        .integer('veiculo_id')
        .unsigned()
        .references('id')
        .inTable('veiculos')
      table
        .integer('motorista_id')
        .unsigned()
        .references('id')
        .inTable('motoristas')

      table.date('data')
      table.time('horario')
      table.string('status')
      table.string('tipo')
      table.timestamps()
    })
  }

  down () {
    this.drop('viagens')
  }
}

module.exports = ViagemSchema
