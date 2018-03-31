# notes app

### storage

All notes are stored locally in browser using localStorage.

The text of each note is stored. On render, they are parsed from storage.

// convert text inside a DIV elemnt into a multi line string
var lines = document.getElementsByClassName('post-layout--right')[0].textContent

var notes = {};

notes[title] = lines

localStorage.setItem('notes', JSON.stringify(notes));

# Note retrieval

var multiLineStr = JSON.parse(localStorage.getItem('notes'));

// parse multiple line string into array
var arr = multiLineStr.match(/[^\r\n]+/g);