import { default as m } from 'mithril'

export default class Coupon {
  controller(attrs) {
    let ctrl = this

    ctrl.code = ''
    ctrl.error = null

    ctrl.submit = function(e) {
      e.preventDefault()
      ctrl.error = null

      validateCoupon(ctrl.code)
        .then(function(discount) {
          console.log('Coupon applied')
          ctrl.code = ''
          attrs.onSuccess(discount)
        })
        .then(null, function(err) {
          ctrl.error = err
        })
    }
  }

  view(ctrl) {
    return m('form.coupon', { onsubmit: ctrl.submit }, [
      ctrl.error ? [
        m('.error', 'Invalid coupon')
      ] : null,
      m('label', 'Enter coupon code (if you have one): '),
      m('input[type=text]', {
        value: ctrl.code,
        onchange: function(e) {
          ctrl.code = e.currentTarget.value
        }
      }),
      m('button[type=submit]', 'Validate coupon')
    ])
  }
}

let validateCoupon = function(code) {
  let isValid = (code == 'happy')
  let discount = 0.20

  // Mock AJAX promise
  let deferred = m.deferred()
  if (isValid) { deferred.resolve(discount) }
  else         { deferred.reject('invalid code') }

  return deferred.promise
}
