'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovimentacaoSchema extends Schema {
  up () {
    this.create('movimentacoes', table => {
      table.increments()
      table
        .integer('viagem_id')
        .unsigned()
        .references('id')
        .inTable('viagens')
      table.date('data_saida')
      table.time('horario_saida')
      table.float('quilometragem_saida')
      table.date('data_retorno')
      table.time('horario_retorno')
      table.float('quilometragem_retorno')

      table.timestamps()
    })
  }

  down () {
    this.drop('movimentacoes')
  }
}

module.exports = MovimentacaoSchema
