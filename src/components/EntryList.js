import { default as m } from 'mithril'
import { all as getAllEntries } from '../models/Entry'

let buildEntryView = function(entry) {
  let date = new Date(entry.enteredAt)
  return m('.entry', [
    m('label', `Entered at: ${date.toString()}`),
    m('ul', entry.volunteers.map(buildVolunteerView))
  ])
}

let buildVolunteerView = function(volunteer) {
  return m('li.volunteer', [
    m('label', volunteer.name),
    m('label', `(${volunteer.email})`)
  ])
}

/*** Public API -- A stateless list of entries ***/
export default class EntryList {
  view() {
    return m('.entry-list', [
      m('h1', 'All entries'),
      m('a[href=/entries/new]', { config: m.route }, 'Add New Entry'),
      getAllEntries().map(buildEntryView)
    ])
  }
}
