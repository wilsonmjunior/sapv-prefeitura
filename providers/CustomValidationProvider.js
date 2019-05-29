'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class CpfProvider extends ServiceProvider {
  validarCPF (cpf) {
    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf === '') return false
    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false
    }
    // Valida 1o digito
    let add = 0
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i)
    let rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(cpf.charAt(9))) return false
    // Valida 2o digito
    add = 0
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i)
    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(cpf.charAt(10))) return false
    return true
  }
  boot () {
    const Validator = use('Validator')
    const moment = use('moment')

    Validator.extend('isvalid', (data, field, message, args, get) => {
      return new Promise((resolve, reject) => {
        const value = get(data, field)

        if (value != null) {
          const valida = this.validarCPF(value)

          if (!valida) {
            reject(message)
          }
        }
        resolve('Ok')
      })
    })

    Validator.extend('isValidDate', (data, field, message, args, get) => {
      return new Promise((resolve, reject) => {
        const value = get(data, field)

        if (value != null) {
          const data = moment(value, 'YYYY-MM-DD', true)

          if (!data.isValid()) {
            reject(message)
          }
        }
        resolve('Ok')
      })
    })

    Validator.extend('anoValido', (data, field, message, args, get) => {
      return new Promise((resolve, reject) => {
        const value = get(data, field)

        if (value != null) {
          if (moment(value).isAfter(moment().format('YYYY'))) {
            reject(message)
          }
        }
        resolve('Ok')
      })
    })
  }
}

module.exports = CpfProvider
