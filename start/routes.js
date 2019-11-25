'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.create')
Route.resource('users', 'UserController')
  .apiOnly()
Route.resource('cursos', 'CursoController')
  .apiOnly()
  .middleware('auth')
Route.resource('disciplinas', 'DisciplinaController')
  .apiOnly()
  .middleware('auth')
Route.resource('nivel-acesso', 'NivelAcessoController')
  .apiOnly()
  .middleware('auth')
Route.resource('salaaula', 'SalaAulaController')
  .apiOnly()
  .middleware('auth')
