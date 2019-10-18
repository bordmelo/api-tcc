'use strict'

const Curso = use('App/Models/Curso')

class CursoController {

  async index () {
    const cursos = Curso.all()

    return cursos
  }

  async store ({ request }) {
    const data = request.only([
      'descricao'
    ])

    const curso = await Curso.create(data)

    return curso
  }

  async show ({ params }) {
    const curso = await Curso.findOrFail(params.id)

    return curso
  }

  async update ({ params, request }) {
    const curso = await Curso.findOrFail(params.id)

    const data = request.only([
      'descricao'
    ])

    curso.merge(data)

    await curso.save()

    return curso
  }

  async destroy ({ params }) {
    const curso = await Curso.findOrFail(params.id)

    await curso.delete()
  }
}

module.exports = CursoController
