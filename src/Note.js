import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  height: 15em;
  float: left;
  width: 21%;
  padding: 1%;
  margin: 1%;

  box-sizing: border-box;
  color: #000;
  border: 1px solid black;
  white-space: pre-wrap;
  border-top: ${ (p) => p.backgroundColor ? '10px ' + p.backgroundColor + ' solid' : '10px red solid' };
  border-radius: 10px;

@media screen and (max-width:980px) {
  width: 46%;
}

@media screen and (max-width:580px) {
  width: 96%;
}
`;

const FloatRight = styled.div`
  float: right;
`;

module.exports = class Note extends React.Component {
  render() {
    const { id, title, text, onClickEditButton, onClickDeleteButton } = this.props;

    return <Item className='note' backgroundColor={ this.props.color }>
        { onClickEditButton && onClickDeleteButton && <FloatRight>
          <button name={ id } onClick={ onClickEditButton } className='editNoteButton'>Edit</button>
          <button name={ id } onClick={ onClickDeleteButton } className='deleteNoteButton'>Delete</button>
        </FloatRight>
      }
      { this.props.children }
    </Item>
  }
}
