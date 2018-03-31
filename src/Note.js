import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  box-sizing: border-box;
  padding: 20px;
  flex: 2;
  color: #000;
  border: 1px solid black;

  border-top: ${ (p) => p.backgroundColor ? '10px ' + p.backgroundColor + ' solid' : '10px red solid' };
  border-radius: 10px;

  @media screen and (max-width:1000px) {
    flex-basis: 50%;
  }

  @media screen and (max-width:560px) {
    flex-basis: 100%;
  }
`;

const Colored = styled.button`
  width: 25px;
  height: 25px;
  background: ${ (p) => p.backgroundColor };
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

module.exports = class Note extends React.Component {
  constructor(props) {
    super(props);
    this.setColor = this.setColor.bind(this);
    this.state = {
      color: 'red',
      showModal: false,
      text: '', // textContent of note
    };
  }

  setColor(event) {
    const color = event.target.name;
    this.setState({
      color,
    });
  }

  render() {
    const { title, text } = this.props;
    const colors = ['red', 'yellow', 'green', 'blue'];

    return <Item backgroundColor={ this.state.color }>
      <Header>
        <div></div>
        <div>
          <button className='editNoteButton'>Edit</button>
          <button className='deleteNoteButton'>Delete</button>
        </div>
      </Header>
      <div>
      { colors.map((color) => <Colored
        onClick={ this.setColor }
        key={ color }
        name={ color }
        backgroundColor={ color } />) }
      </div>
      <h2>{ title }</h2>
      <p>{ text }</p>
    </Item>
  }
}
