import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Note from '../src/Note';

/*
on render, has the delete and edit icon
 */

describe('<Note>', () => {
  it('edit and delete buttons are rendered', () => {
    const wrapper = shallow(<Note />);
    expect(wrapper.find('.deleteNoteButton')).to.have.length(1);
    expect(wrapper.find('.editNoteButton')).to.have.length(1);
  });
});
