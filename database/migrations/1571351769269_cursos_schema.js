'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursosSchema extends Schema {
  up () {
    this.create('cursos', (table) => {
      table.increments()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('cursos')
  }
}

module.exports = CursosSchema
