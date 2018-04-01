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
 Grab the first 9 characters after the decimal.
 */
function generateID() {
  return parseInt(Math.random().toString().substr(2, 9));
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
      isDeleting: false,
      openModal: false,
      newNote: {
        color: 'red',
      },
      notes: [],
    };
  }

  componentDidMount() {
    const _notes = localStorage.getItem('notes');
    if (_notes) {
      this.setState({ notes: JSON.parse(_notes) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  componentWillUnmount() {
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  // ie. 'name', 'color', e
  updateNote(targetAttribute, keyName, event) {
    const { currentNode, notes } = this.state;
    const noteId = currentNode.id;
    const _index = notes.findIndex((note) => note.id === parseInt(noteId))
    const oldState = JSON.parse(JSON.stringify(notes));

    if (!keyName && !event) {

      // update notes
      oldState[_index] = currentNode;
      this.setState({
        notes: oldState,
        openModal: false,
        isEditing: false,
        currentNode: {},
      });
    } else {
      const currentNodeCopy = JSON.parse(JSON.stringify(currentNode));
      currentNodeCopy[keyName] = event.target[targetAttribute];

      this.setState({
        currentNode: currentNodeCopy,
      });
    }
  }

  deleteNote() {
    const { currentNode, notes } = this.state;
    const _index = notes.findIndex((note) => note.id === parseInt(currentNode.id));
    const oldState = JSON.parse(JSON.stringify(notes));
    oldState.splice(_index, 1);
    this.setState({
      openModal: false,
      notes: oldState,
      isDeleting: false,
      currentNode: {},
    });
  }

  addNote() {
    const oldState = JSON.parse(JSON.stringify(this.state.notes));
    oldState.push({ ...this.state.newNote, id: generateID() });
    this.setState({
      newNote: defaultNewNote,
      openModal: false,
      notes: oldState,
      isCreating: false,
    });
  }

  updateNewNote(targetAttribute, keyName, event) {
    const _copy = JSON.parse(JSON.stringify(this.state.newNote))
    _copy[keyName] = event.target[targetAttribute];
    this.setState({
      newNote: _copy,
    });
  }

  toggleModal(stateAttribute, event) {
    const obj = { openModal: !this.state.openModal };
    if (stateAttribute) {
      if (stateAttribute != 'isCreating' && event && event.target.name) {
        const noteId = event.target.name;
        const _index = this.state.notes.findIndex((note) => note.id === parseInt(noteId));
        debugger;
        obj.currentNode = this.state.notes[_index]
      }
      obj[stateAttribute] = true;
    }
    this.setState(obj);
  }

  render() {
    const { notes, isCreating, isEditing, isDeleting, currentNode, newNote } = this.state;
    const noteElems = notes.map((note) => <Note
      id={ note.id }
      onClickEditButton={ (e) => this.toggleModal('isEditing', e) }
      onClickDeleteButton={ (e) => this.toggleModal('isDeleting', e) }
      key={ note.id } color={ note.color }>
      <h2>{ note.title }</h2>
      <div>{ note.text }</div>
    </Note>);

    return <div>
      <Header>
        <div></div>
        <div><button onClick={ (e) => this.toggleModal('isCreating') }>Add Note</button></div>
      </Header>
      { this.state.openModal && isCreating && <Modal
          onConfirm={ this.addNote }
          primaryButtonText='Add'
          show={ true }
          onClose={ this.toggleModal }>
          <Note color={ newNote ? newNote.color : 'red' }>
            <ColorPicker setColor={ (e) => this.updateNewNote('name', 'color', e) } />
            <p><input onChange={ (e) => this.updateNewNote('value', 'title', e) } placeholder='Untitled' /></p>
            <p><textarea onChange={ (e) => this.updateNewNote('value', 'text', e) } placeholder='Type here' /></p>
          </Note>
        </Modal> }
      { this.state.openModal && isEditing && <Modal
          onConfirm={ this.updateNote }
          primaryButtonText='Save'
          show={ true }
          onClose={ this.toggleModal }>
          <Note color={ currentNode.color }>
            <ColorPicker setColor={ (e) => this.updateNote('name', 'color', e) } />
            <p><input onChange={ (e) => this.updateNote('value', 'title', e) } value={ currentNode.title }/></p>
            <p><textarea onChange={ (e) => this.updateNote('value', 'text', e) } value={ currentNode.text }/></p>
          </Note>
        </Modal> }
      { this.state.openModal && isDeleting && <Modal
          onConfirm={ this.deleteNote }
          primaryButtonText='Delete'
          show={ true }
          onClose={ this.toggleModal }>
          <h2>Delete Note</h2>
          <p>Are you sure you want to delete this note?</p>
        </Modal>
      }
      <Wrapper>
        { noteElems }
      </Wrapper>
    </div>
  }
}
