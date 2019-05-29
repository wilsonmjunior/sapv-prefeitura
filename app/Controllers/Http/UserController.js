'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    return User.all()
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
  async findByEmail ({ params }) {
    const { email } = params

    const user = await User.query()
      .where('email', email)
      .first()

    return user
  }
}

module.exports = UserController
