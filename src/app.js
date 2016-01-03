import { default as m } from 'mithril'
import * as Entry from './models/Entry'
import EntryList from './components/EntryList'
import EntryForm from './components/EntryForm'

// À la lodash's partial
Function.prototype.papp = function () {
  var slice = Array.prototype.slice
  var fn = this
  var args = slice.call(arguments)
  return function () {
    return fn.apply(this, args.concat(slice.call(arguments)))
  }
}

Entry.create({
  "enteredAt": 1443018758199,
  "volunteers": [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }
  ]
})

Entry.create({
  "enteredAt": 1443019047227,
  "volunteers": [
    { name: "Carl", email: "carl@example.com" },
    { name: "Dan", email: "dan@example.com" },
    { name: "Erl", email: "erl@example.com" },
  ]
})

m.route(document.getElementById('app'), '/', {
  '/': new EntryList(),

  '/entries/new': new EntryForm(),

  '/example': {
    controller: function() {
      let ctrl = this
      ctrl.data = [10, 20, 30]
    },
    view: function(ctrl) {
      return m('.example-page', [
        m('a[href=/]', { config: m.route }, "< Back"),
        m('select', ctrl.data.map(function(n) {
          return m('option', { value: n }, "Number: " + n)
        }))
      ])
    }
  }
})
