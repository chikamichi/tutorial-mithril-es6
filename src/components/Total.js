import { default as m } from 'mithril'

let pricePerCount = 10

let calcPrice = function(discount, count) {
  let total = count * pricePerCount
  return roundCents(total - total * discount)
}

let calcDiscount = function(discount, count) {
  let total = count * pricePerCount
  return roundCents(total * discount)
}

let roundCents = function(num) {
  return Math.round(num * 100) / 100
}

let discountView = function(ctrl, attrs) {
  if (attrs.discount > 0) {
    let discountedAmount = calcDiscount(attrs.discount, attrs.count)
    return m('span', `(Coupon discount: -$${discountedAmount})`)
  }
}

export default class Total {
  view(ctrl, attrs) {
    return m('.total', [
      m('label', 'Total: '),
      discountView(ctrl, attrs),
      m('b', `$${calcPrice(attrs.discount, attrs.count)}`)
    ])
  }
}
