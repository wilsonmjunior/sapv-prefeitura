'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParametrizacaoSchema extends Schema {
  up () {
    this.create('parametrizacao', table => {
      table.increments()

      table.time('expediente_inicio').notNullable()
      table.time('expediente_fim').notNullable()
      table.string('logo').notNullable()
      table.string('endereco').notNullable()
      table.string('bairro').notNullable()
      table.string('numero').notNullable()
      table.string('telefone').notNullable()
      table.string('nome_empresa').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('parametrizacao')
  }
}

module.exports = ParametrizacaoSchema
