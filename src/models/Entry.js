// Entry -- a store for entries

// Example for a valid Entry record:
//
// {
//   "enteredAt": 1443018758199,
//   "volunteers": [
//     { name: "Alice", email: "alice@example.com" },
//     { name: "Bob", email: "bob@example.com" }
//   ]
// }

let store = []
let idCounter = store.length

/*** Public API ***/

export let all = function() {
  return store
}

export let create = function(attrs) {
  attrs.id = (idCounter += 1)
  attrs.enteredAt = Date.now()
  store.push(attrs)
}

export let VM = function() {
  return {
    enteredAt: null,
    volunteers: [ volunteerVM() ]
  }
}

export let volunteerVM = function() {
  return {
    name: '[Your name]',
    email: '[Your email]'
  }
}
