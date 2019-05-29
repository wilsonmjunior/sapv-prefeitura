'use strict'

const Schema = use('Schema')

class VeiculoSchema extends Schema {
  up () {
    this.create('veiculos', table => {
      table.increments()
      table.integer('numero').notNullable()
      table.string('marca').notNullable()
      table.string('modelo').notNullable()
      table.string('placa').notNullable()
      table.integer('ano').notNullable()
      table.integer('capacidade').notNullable()
      table.string('bloqueio_ativo')
      table.float('quilometragem_atual')
      table.float('quilometragem_anterior')
      table.timestamps('')
    })
  }

  down () {
    this.drop('veiculos')
  }
}

module.exports = VeiculoSchema
