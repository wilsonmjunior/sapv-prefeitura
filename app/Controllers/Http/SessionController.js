'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()
    const user = await User.query()
      .where('email', email)
      .first()

    if (user) {
      if (await Hash.verify(password, user.password)) {
        // return auth.attempt(email, password)
        let user = await User.findBy('email', email)
        let token = await auth.generate(user)
        return response.json({ user, token })
      }
    }
    return null
  }
}

module.exports = SessionController
