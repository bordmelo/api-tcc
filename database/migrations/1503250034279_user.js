'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 80).notNullable()
      table.string('rg', 80).notNullable().unique()
      table.string('cpf', 80).notNullable().unique()
      table.string('orgaoemissor', 80).notNullable()
      table.integer('cep', 8)
      table.string('logradouro', 80)
      table.string('numero', 240)
      table.string('bairro', 80)
      table.string('cidade', 80)
      table.string('uf', 2)
      table.string('email', 254).notNullable().unique()
      table.boolean('ativo')
      table.string('nivel_acesso')
      table.string('faculdade', 240)
      table.string('formacao', 240)
      table.boolean('professor')
      table.string('anoinicio')
      table.string('anotermino')
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
