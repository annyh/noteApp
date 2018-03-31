import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width:1000px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.div`
  background-color: black;
  box-sizing: border-box;
  padding: 20px;
  flex: 2;
  color: #fff;
  border: 1px solid white;

  @media screen and (max-width:1000px) {
    flex-basis: 50%;
  }

  @media screen and (max-width:560px) {
    flex-basis: 100%;
  }
`;

const colors = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
};

module.exports = class Note extends React.Component {

  constructor(props) {
    super(props);

    // default color
    this.state = {
      color: colors.red,
      showModal: false,
      text: '', // textContent of note
    };
  }

  render() {
    return <Wrapper>
      <Item>
        <h2>title1</h2>
        <p> You'll notice that even though this column has far more content in it.</p>
      </Item>
      <Item>
        <h2>title1</h2>
        <p> You'll notice that even though this column has far more content in it.</p>
      </Item>
      <Item>
        <h2>title2</h2>
        <p> Normally, the only way to achieve this would be either a hack, or to set all boxes to min-height.</p>
      </Item>
      <Item>
        <h2>title3</h2>
        <p> This is a column with not much content.</p>
      </Item>
    </Wrapper>
  }
}
