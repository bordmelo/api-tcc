'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.create')
Route.resource('users', 'UserController')
  .apiOnly()
  .middleware('auth')
Route.resource('cursos', 'CursoController')
  .apiOnly()
  .middleware('auth')
Route.resource('disciplinas', 'DisciplinaController')
  .apiOnly()
  .middleware('auth')
