import React from 'react';
import styled from 'styled-components';

const Colored = styled.button`
  width: 25px;
  height: 25px;
  background: ${ (p) => p.backgroundColor };
`;

module.exports = class ColorPicker extends React.Component {
  render() {
    const { setColor } = this.props;
    const colors = ['red', 'yellow', 'green', 'blue'];

    return <div>
      { colors.map((color) => <Colored
        onClick={ setColor }
        className='colorPickerButton'
        key={ color }
        name={ color }
        backgroundColor={ color } />)
    }
    </div>;
  }
}

