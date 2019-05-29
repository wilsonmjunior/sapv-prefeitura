'use strict'

const Schema = use('Schema')

class CidSchema extends Schema {
  up () {
    this.create('cids', table => {
      table.increments()
      table
        .integer('especialidade_id')
        .unsigned()
        .references('id')
        .inTable('especialidades')
      table.string('nome').notNullable()
      table.string('codigo').notNullable()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('cids')
  }
}

module.exports = CidSchema
