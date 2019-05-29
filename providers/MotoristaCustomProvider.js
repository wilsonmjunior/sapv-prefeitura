'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class MotoristaCustomProvider extends ServiceProvider {
  boot () {
    const Validator = use('Validator')
    const moment = use('moment')

    Validator.extend('isValidDateCNH', (data, field, message, args, get) => {
      return new Promise((resolve, reject) => {
        const value = get(data, field)

        if (value != null) {
          const dateProx = moment()
            .add(30, 'days')
            .calendar()

          const data = moment(value, 'YYYY-MM-DD', true)
          if (!data.isValid()) {
            reject(message)
          } else {
            if (!moment(value).isAfter(dateProx)) {
              reject(message)
            }
          }
        }
        resolve('Ok')
      })
    })

    Validator.extend('admissaoValida', (data, field, message, args, get) => {
      return new Promise((resolve, reject) => {
        const value = get(data, field)

        if (value != null) {
          if (moment(value).isAfter(moment())) {
            reject(message)
          }
        }
        resolve('ok')
      })
    })

    Validator.extend('demissaoValida', (data, field, message, args, get) => {
      return new Promise((resolve, reject) => {
        const value = get(data, field)
        const [dtAdmissao] = args

        if (value != null) {
          if (
            moment(value).isBefore(dtAdmissao) ||
            moment(value).isAfter(moment())
          ) {
            reject(message)
          }
        }
        resolve('ok')
      })
    })
  }
}

module.exports = MotoristaCustomProvider
