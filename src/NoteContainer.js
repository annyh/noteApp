import React from 'react';
import Note from './Note';
import Modal from './Modal';
import ColorPicker from './ColorPicker';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width:1000px) {
    flex-wrap: wrap;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 Math.random should be unique because of its seeding algorithm.
 Convert it to base 36 (numbers + letters), and grab the first 9 characters
 after the decimal.
 */
function generateID() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

const defaultNewNote = { color: 'red' };
module.exports = class NoteContainer extends React.Component {
   constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateNewNote = this.updateNewNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.state = {
      isCreating: false,
      isEditing: false,
      openModal: false,
      newNote: {
        color: 'red',
      },
      notes: [{
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
      }],
    };
  }

  componentDidMount() {
    // TODO: Get notes from localStorage. Set it to state

  }

  updateNote(event) {
    const noteId = event.target.name;
    this.state.notes.findIndex((note) => note.id === parseInt(noteId))
  }

  deleteNote(event) {
    const noteId = event.target.name;
    const _index = this.state.notes.findIndex((note) => note.id === parseInt(noteId));
    const oldState = JSON.parse(JSON.stringify(this.state.notes));
    oldState.splice(_index, 1);
    this.setState({
      openModal: false,
      notes: oldState,
    });
  }

  addNote() {
    const oldState = JSON.parse(JSON.stringify(this.state.notes));
    oldState.push({ ...this.state.newNote, id: generateID() });
    this.setState({
      newNote: defaultNewNote,
      openModal: false,
      notes: oldState,
    });
  }

  updateNewNote(targetAttribute, keyName, event) {
    const _copy = JSON.parse(JSON.stringify(this.state.newNote))
    _copy[keyName] = event.target[targetAttribute];
    this.setState({
      newNote: _copy,
    });
  }

  toggleModal(stateAttribute) {
    const obj = { openModal: !this.state.openModal };
    obj[stateAttribute] = true;
    this.setState(obj);
  }

  render() {
    const { notes, isCreating, isEditing } = this.state;
    const noteElems = notes.map((note) => <Note
      id={ note.id }
      onClickEditButton={ this.updateNote }
      onClickDeleteButton={ this.deleteNote }
      key={ note.id } color={ note.color }>
      <h2>{ note.title }</h2>
      <p>{ note.text }</p>
    </Note>);

    return <div>
      <Header>
        <div></div>
        <div><button onClick={ (e) => this.toggleModal('isCreating') }>Add Note</button></div>
      </Header>
      { this.state.openModal && isCreating && <Modal
          onConfirm={ this.addNote }
          primaryButtonText='Add'
          show={ this.state.openModal }
          onClose={ this.toggleModal }>
          <Note>
            <ColorPicker setColor={ (e) => this.updateNewNote('name', 'color', e) } />
            <p><input onChange={ (e) => this.updateNewNote('value', 'title', e) } placeholder='Untitled' /></p>
            <p><input onChange={ (e) => this.updateNewNote('value', 'text', e) } placeholder='Type here' /></p>
          </Note>
        </Modal> }
      <Wrapper>
        { noteElems }
      </Wrapper>
    </div>
  }
}
