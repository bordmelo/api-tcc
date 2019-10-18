'use strict'

const Disciplina = use('App/Models/Disciplina')

class DisciplinaController {
  async index () {
    const disciplinas = Disciplina.all()

    return disciplinas
  }

  async store ({ request, response }) {
    const data = request.only([
      'descricao',
      'curso_id'
    ])

    const disciplina = await Disciplina.create(data)

    return disciplina
  }

  async show ({ params }) {
    const disciplina = await Disciplina.findOrFail(params.id)

    await disciplina.load('curso')

    return disciplina
  }

  async update ({ params, request, response }) {
    const disciplina = await Disciplina.findOrFail(params.id)

    const data = request.only([
      'descricao',
      'curso_id'
    ])

    disciplina.merge(data)

    await disciplina.save()

    return disciplina
  }

  async destroy ({ params }) {
    const disciplina = await Disciplina.findOrFail(params.id)

    await disciplina.delete()
  }
}

module.exports = DisciplinaController
