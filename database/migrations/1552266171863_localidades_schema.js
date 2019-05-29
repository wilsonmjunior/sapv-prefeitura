'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocalidadesSchema extends Schema {
  up () {
    this.create('localidades', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('descricao')
      table.string('estado').notNullable()
      table.float('distancia').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('localidades')
  }
}

module.exports = LocalidadesSchema
