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

  async changePassword ({ request, auth, response }) {
    // get currently authenticated user
    // const user = auth.current.user

    const { email, password, newPassword } = request.all()
    const user = await User.query()
      .where('email', email)
      .first()

    if (user) {
      const verifyPassword = !(await Hash.verify(password, user.password))

      if (verifyPassword) {
        return response.status(400).json({
          status: 'error',
          message: 'A senha atual não confere! Por favor, tente novamente.'
        })
      }

      user.password = newPassword
      await user.save()

      return response.json({
        status: 'success',
        message: 'Senha alterada com sucesso!'
      })
    }
    return response.status(400).json({
      status: 'error',
      message: 'O usuário não existe.'
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

  async destroy ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}

module.exports = UserController
