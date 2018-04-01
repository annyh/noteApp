# Notes app

All notes are stored locally in browser using localStorage.
On page refresh, your notes will still be there!

You can create, edit, and delete your notes.

Your notes are responsive, due to a flexbox layout.

### Setup

npm install

npm start

Add your notes at http://localhost:8080/

### Storage

The text of each note is stored. On render, they are parsed from storage.

On component mount AND update
localStorage.setItem('notes', JSON.stringify(this.state));

On component mount: set state using
const _notes = localStorage.getItem('notes');


// sample notes

var notes =  [{
  id: 1,
  title: 'All notes',
  text: 'All notes are stored locally in browser using localStorage.',
  color: 'red',
}, {
  id: 2,
  title: 'Hey hey',
  text: 'All notes are stored locally.',
  color: 'yellow',
}, {
  id: 3,
  title: 'All hey',
  text: 'Using localStorage.',
  color: 'green',
}, {
  id: 4,
  title: 'Hey hey',
  text: 'Hey hey Hey hey Hey hey Hey hey Hey hey Hey hey Hey hey',
  color: 'blue',
}];