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
 Header: input with placeholder: Untitled
 text: input with placeholder Start typing here
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

  it('on delete, delete Button shows', () => {
    const wrapper = shallow(<Modal show={ true } primaryButtonText='Delete' />);
    expect(wrapper.find('.delete')).to.have.length(1);
  });

  it('on delete, show the expected text', () => {
    const wrapper = shallow(<Modal show={ true }
      primaryButtonText='Delete'>
        <h2>Delete Note</h2>
        <p>Are you sure you want to delete this note?</p>
      </Modal>);
    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('p')).to.have.length(1);
  });
});
