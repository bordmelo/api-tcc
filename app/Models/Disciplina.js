'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disciplina extends Model {
  curso () {
    return this.belongsTo('App/Models/Curso')
  }
}

module.exports = Disciplina
