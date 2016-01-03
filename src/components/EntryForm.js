import { default as m } from 'mithril'
import * as Entry from '../models/Entry'
import Volunteers from '../components/Volunteers'
import Total from '../components/Total'
import Coupon from '../components/Coupon'

export default class EntryForm {
  controller() {
    let ctrl = this
    ctrl.entry = Entry.VM()
    ctrl.discount = 0

    ctrl.submit = function() {
      Entry.create(ctrl.entry)
      m.route('/')
    }
  }

  view(ctrl) {
    return m('.entry-form', [
      m('h1', 'New Entry'),
      m('h3', 'Please enter each volunteer\'s contact information:'),

      m.component(new Volunteers(), { volunteers: ctrl.entry.volunteers }),

      m.component(new Total(), {
        count: ctrl.entry.volunteers.length,
        discount: ctrl.discount
      }),

      m.component(new Coupon(), {
        onSuccess: function(newDiscount) {
          ctrl.discount = newDiscount
        }
      }),

      m('button', { onclick: ctrl.submit }, 'Submit')
    ])
  }
}
