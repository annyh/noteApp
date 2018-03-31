import React from 'react';
import Note from './Note';

module.exports = class NoteContainer extends React.Component {
  render() {
    return <div className="container">
      <Note />
    </div>
  }
}
