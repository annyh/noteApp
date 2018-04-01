import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.3);
  padding: 50px;
`;

const ModalWindow = styled.div`
  background: #fff;
  border-radius: 5px;
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Modal extends React.Component {
  render() {

    // TODO: change to get from props
    const buttonText = 'Save';
    const { primaryButtonText,
      show,
      children,
      onConfirm,
      onClose } = this.props;
    let primaryButton;
    if (primaryButtonText) {
      primaryButton = <div><button
        onClick={ onConfirm }
        className={ primaryButtonText.toLowerCase() }>{ primaryButtonText }</button></div>;
    }

    // Render nothing if the "show" prop is false
    if(!show) {
      return null;
    }

    return (
      <Background className='grayBackground'>
        <ModalWindow>
          {children}
      <ButtonRow>
        <div><button className='cancelButton' onClick={ onClose }>Cancel</button></div>
        { primaryButton }
      </ButtonRow>
        </ModalWindow>
      </Background>
    );
  }
}

Modal.propTypes = {
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
