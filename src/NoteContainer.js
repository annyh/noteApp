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
    this.state = { openModal: false };
  }


  setColor(event) {
    const color = event.target.name;
    console.log('************', color)

    // need know which note to map to
    // this.setState({
    //   color,
    // });
  }

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  render() {

    // TODO: Get from localStorage
    const notes = {};
    notes['first note'] = 'Hey hey';
    notes['second note'] = 'All notes are stored locally in browser using localStorage.';
    notes['third note'] = 'Hey hey';
    notes['fourth note'] = 'Hey hey Hey hey Hey hey Hey hey Hey hey Hey hey Hey hey';
    const noteElems = [];

    for (let _key in notes) {
      noteElems.push(<Note key={ _key }>
        <p>{ notes[_key] }</p>
        </Note>)
    }

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
