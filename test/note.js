import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Note from '../src/Note';

describe('<Note>', () => {
  const DUMMY_FUNC = () => console.log();

  it('with prop, edit and delete buttons are rendered', () => {
    const wrapper = shallow(<Note
      onClickEditButton= { DUMMY_FUNC }
      onClickDeleteButton={ DUMMY_FUNC }/>);
    expect(wrapper.find('.deleteNoteButton')).to.have.length(1);
    expect(wrapper.find('.editNoteButton')).to.have.length(1);
  });

   it('by default, edit and delete buttons are NOT rendered', () => {
    const wrapper = shallow(<Note />);
    expect(wrapper.find('.deleteNoteButton')).to.have.length(0);
    expect(wrapper.find('.editNoteButton')).to.have.length(0);
  });
});
