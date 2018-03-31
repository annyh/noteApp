import React from 'react';
import Note from './Note';
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
  render() {

    // TODO: Get from localStorage
    const notes = {};
    notes['first note'] = 'Hey hey';
    notes['second note'] = 'All notes are stored locally in browser using localStorage.';
    notes['third note'] = 'Hey hey';
    notes['fourth note'] = 'Hey hey Hey hey Hey hey Hey hey Hey hey Hey hey Hey hey';
    const noteElems = [];

    for (let _key in notes) {
      noteElems.push(<Note
        title={ _key } key={ _key } text={ notes[_key] } />)
    }

    return <div>
      <Header>
        <div></div>
        <div><button>Add Note</button></div>
      </Header>

      <Wrapper>
        { noteElems }
      </Wrapper>
    </div>
  }
}
