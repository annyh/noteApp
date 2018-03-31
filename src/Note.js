import React from 'react';
import styled from 'styled-components';

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
    const { title, text } = this.props;

    return <Item>
        <h2>{ title }</h2>
        <p>{ text }</p>
      </Item>
  }
}
