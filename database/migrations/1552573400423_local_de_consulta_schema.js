'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocaisDeConsultaSchema extends Schema {
  up () {
    this.create('locais_de_consulta', table => {
      table.increments()
      table.string('nome').notNullable()
      table
        .integer('localidade_id')
        .unsigned()
        .references('id')
        .inTable('localidades')
      table.string('bairro').notNullable()
      table.string('endereco').notNullable()
      table.string('numero').notNullable()
      table.string('cep')
      table.string('telefone')
      table.string('celular')
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('locais_de_consulta')
  }
}

module.exports = LocaisDeConsultaSchema
