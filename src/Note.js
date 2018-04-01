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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

module.exports = class Note extends React.Component {
  render() {
    const { title, text, onClickEditButton, onClickDeleteButton } = this.props;

    return <Item backgroundColor={ this.props.color }>
        { onClickEditButton && onClickDeleteButton && <Header>
          <div></div>
          <div>
            <button className='editNoteButton'>Edit</button>
            <button className='deleteNoteButton'>Delete</button>
          </div>
        </Header>
      }
      { this.props.children }
    </Item>
  }
}
