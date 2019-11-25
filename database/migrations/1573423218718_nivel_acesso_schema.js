'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NivelAcessoSchema extends Schema {
  up () {
    this.create('nivel_acessos', (table) => {
      table.increments()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('nivel_acessos')
  }
}

module.exports = NivelAcessoSchema
