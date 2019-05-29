'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteSchema extends Schema {
  up () {
    this.create('pacientes', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('cpf')
      table.string('rg')
      table.string('sus')
      table.string('endereco').notNullable()
      table.string('numero').notNullable()
      table.string('bairro').notNullable()
      table.string('cep').notNullable()
      table.string('celular').notNullable()
      table.string('celular_contato')
      table.string('telefone')
      table.string('telefone_contato')

      table.timestamps()
    })
  }

  down () {
    this.drop('pacientes')
  }
}

module.exports = PacienteSchema
