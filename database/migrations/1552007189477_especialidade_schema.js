'use strict'

const Schema = use('Schema')

class EspecialidadeSchema extends Schema {
  up () {
    this.create('especialidades', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('especialidades')
  }
}

module.exports = EspecialidadeSchema
