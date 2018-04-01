import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import NoteContainer from '../src/NoteContainer';

describe('<NoteContainer>', () => {
  const STRING = 'this is a title';

  it('on addNote, new note is added to state', () => {
    const wrapper = mount(<NoteContainer />);
    wrapper.instance().addNote({ text: 'hello', title: STRING, color: 'green' });
    wrapper.instance().forceUpdate(() => {
      expect(wrapper.state().notes.length).to.be.above(0);
    });
  });

  it('updateNewNote updates new note in the state', () => {
    const wrapper = mount(<NoteContainer />);
    wrapper.instance().updateNewNote('value', 'title', { target: { value: STRING } });
    wrapper.instance().forceUpdate(() => {
      expect(wrapper.state().newNote.title).to.equal(STRING);
    });
  });
});
