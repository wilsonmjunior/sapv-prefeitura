'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MotoristaSchema extends Schema {
  up () {
    this.create('motoristas', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('cpf')
      table.string('rg')
      table.string('cnh').notNullable()
      table.date('validade_cnh')
      table.string('endereco').notNullable()
      table.string('numero').notNullable()
      table.string('bairro').notNullable()
      table.string('cep').notNullable()
      table.string('celular').notNullable()
      table.string('celular_coorporativo')
      table.string('telefone')
      table.date('dt_admissao')
      table.date('dt_demissao')
      table.timestamps()
    })
  }

  down () {
    this.drop('motoristas')
  }
}

module.exports = MotoristaSchema
