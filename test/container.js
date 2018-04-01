import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { generateID } from '../src/NoteContainer';

describe('<NoteContainer>', () => {
  it('generateID generates a number', () => {
    const int = generateID();
    expect(Number.isInteger(int)).to.be.true;
  });
});
