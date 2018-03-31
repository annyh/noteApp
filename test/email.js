import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Email from '../src/email';

describe('<Email>', () => {
  it('should have an input for the email', () => {
    const wrapper = shallow(<Email/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', () => {
    const wrapper = shallow(<Email/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
