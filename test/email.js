import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Modal from '../src/Modal';

/*
 On delete:
 Header: 'Delete Note'
 text: 'Are you sure you want to delete this note?'
 buttons: ['Cancel', 'Delete']

 On edit:
 Header: the note's subject
 text: the note's text
 buttons: ['Cancel', 'Save']

 On new:
 Header: placeholder: Untitled
 text: Just start typing here
 buttons: ['Cancel', 'Add']
 */

describe('<Modal>', () => {
  it('Wrapper is NOT rendered when show is false', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('.grayBackground')).to.have.length(0);
  });

  it('Wrapper is rendered when show is true', () => {
    const wrapper = shallow(<Modal show={ true }/>);
    expect(wrapper.find('.grayBackground')).to.have.length(1);
  });

  it('should have a Cancel button', () => {
    const wrapper = shallow(<Modal show={ true }/>);
    expect(wrapper.find('.cancelButton')).to.have.length(1);
  });

  // on delete, delete button shows up
  it('on delete, delete Button shows', () => {
    const wrapper = shallow(<Modal show={ true } primaryButtonText='Delete' />);
    expect(wrapper.find('.delete')).to.have.length(1);
  });
});
