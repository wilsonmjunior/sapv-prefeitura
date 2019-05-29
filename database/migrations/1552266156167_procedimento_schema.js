'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProcedimentoSchema extends Schema {
  up () {
    this.create('procedimentos', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('procedimentos')
  }
}

module.exports = ProcedimentoSchema
