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

const Colored = styled.span`
  background: ${ (p) => p.backgroundColor };
`;

module.exports = class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      showModal: false,
      text: '', // textContent of note
    };
  }

  render() {
    const { title, text } = this.props;
    const colors = ['red', 'yellow', 'green', 'blue'];

    return <Item>
      <div>
      { colors.map((color) => <Colored
        key={ color } backgroundColor={ color }>{ color }</Colored>) }
      </div>
      <h2>{ title }</h2>
      <p>{ text }</p>
    </Item>
  }
}
