'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
class UserController {
  async index () {
    return User.all()
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'nivel'])

    const user = await User.create(data)

    return user
  }
  async show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }
  async changePassword ({ request, auth, response }) {
    // get currently authenticated user
    const user = auth.current.user

    // verify if current password matches
    const verifyPassword = await Hash.verify(
      request.input('password'),
      user.password
    )

    // display appropriate message
    if (!verifyPassword) {
      return response.status(400).json({
        status: 'error',
        message: 'Current password could not be verified! Please try again.'
      })
    }

    // hash and save new password
    user.password = request.input('newPassword')
    await user.save()

    return response.json({
      status: 'success',
      message: 'Password updated!'
    })
  }
  async update ({ params, request }) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['username', 'email', 'password', 'nivel'])

    user.merge(data)

    await user.save()

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
