'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    const data = {
      username: 'Administrador',
      email: 'admin@iepe.sp.gov.br',
      password: await Hash.make('admin3264'),
      nivel: 'admin'
    }

    const user = await Database.insert(data).into('users')
    console.log(user)
  }
}

module.exports = UserSeeder
