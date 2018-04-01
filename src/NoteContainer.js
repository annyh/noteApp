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

module.exports = class NoteContainer extends React.Component {
   constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.setColor = this.setColor.bind(this);
    this.addNote = this.addNote.bind(this);
    this.state = {
      openModal: false,
      newNote: {
        color: 'red',
        text: '',
        title: '',
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

  addNote(obj) {
    const oldState = JSON.parse(JSON.stringify(this.state.notes));
    oldState.push({ ...obj, id: generateID(), color: obj.color || 'red' });
    this.setState({
      notes: oldState,
    });
  }

  setColor(event) {
    const color = event.target.name;
    console.log('************', color, event.target)

    // need know which note to map to
  }

  updateTitle(event) {
    const _copy = JSON.parse(JSON.stringify(this.state.newNote))
    _copy.title = event.target.textContent;
    this.setState({
      newNote: _copy,
    });
  }


  updateText(event) {
    const _copy = JSON.parse(JSON.stringify(this.state.newNote))
    _copy.text = event.target.textContent;
    this.setState({
      newNote: _copy,
    });
  }

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  render() {
    const { notes } = this.state;
    const noteElems = notes.map((note) => <Note
      showEditDeleteButton= { true }
      key={ note.id } color={ note.color }>
      <h2>{ note.title }</h2>
      <p>{ note.text }</p>
    </Note>);

    return <div>
      <Header>
        <div></div>
        <div><button onClick={ this.toggleModal }>Add Note</button></div>
      </Header>
      { this.state.openModal && <Modal
          onConfirm={ this.addNote }
          showEditDeleteButton={ false }
          primaryButtonText='Add'
          show={ this.state.openModal }
          onClose={ this.toggleModal }>
          <Note>
            <ColorPicker setColor={ this.setColor } />
            <p><input onChange={ updateTitle } placeholder='Untitled' /></p>
            <p><input onChange={ updateText } placeholder='Type here' /></p>
          </Note>
        </Modal> }
      <Wrapper>
        { noteElems }
      </Wrapper>
    </div>
  }
}
