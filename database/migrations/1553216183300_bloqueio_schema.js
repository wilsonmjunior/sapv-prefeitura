'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BloqueioSchema extends Schema {
  up () {
    this.create('bloqueios', table => {
      table.increments()
      table
        .integer('veiculo_id')
        .unsigned()
        .references('id')
        .inTable('veiculos')
      table.string('observacoes')
      table.date('data_de_bloqueio')
      table.string('motivo')
      table.date('data_baixa')
      table.integer('numero_baixa')
      table.date('data_previsao_retorno')
      table.date('data_retorno')
      table.float('quilometragem_saida')
      table.float('quilometragem_retorno')
      table.float('quilometragem_baixa')

      table.timestamps()
    })
  }

  down () {
    this.drop('bloqueios')
  }
}

module.exports = BloqueioSchema
