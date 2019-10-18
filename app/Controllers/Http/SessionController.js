'use strict'

const User = use('App/Models/User')

class SessionController {
  async create ({ request, auth }) {
    const { email, password } = request.all()

    const user = await User.findBy('email', email)

    const token = await auth.attempt(email, password)

    user.token = token.token

    return user
  }
}

module.exports = SessionController
