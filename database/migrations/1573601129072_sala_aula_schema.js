'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalaAulaSchema extends Schema {
  up () {
    this.create('sala_aulas', (table) => {
      table.increments()
      table.integer('curso_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cursos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('descricao')
      table.integer('disciplina_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('disciplinas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('sala_aulas')
  }
}

module.exports = SalaAulaSchema
