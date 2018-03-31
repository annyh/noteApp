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


module.exports = class NoteContainer extends React.Component {
   constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.setColor = this.setColor.bind(this);
    this.state = { openModal: false,
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
    // TODO: Get from localStorage

  }

  setColor(event) {
    const color = event.target.name;
    console.log('************', color)

    // need know which note to map to
  }

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  render() {
    const { notes } = this.state;
    const noteElems = notes.map((note) => <Note
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
          primaryButtonText='Add'
          show={ this.state.openModal }
          onClose={ this.toggleModal }>
          <Note>
            <ColorPicker setColor={ this.setColor } />
            <p><input placeholder='Untitled' /></p>
            <p><input placeholder='Type here' /></p>
          </Note>
        </Modal> }
      <Wrapper>
        { noteElems }
      </Wrapper>
    </div>
  }
}
