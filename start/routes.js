'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.create')
Route.resource('users', 'UserController')
  .apiOnly()
  .middleware('auth')
