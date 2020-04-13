import styled from 'styled-components'
import React from 'react';
import ReactDOM from 'react-dom';


// Background of modal
const BackdropStyle = styled.div`
    display:flex;
    position: fixed;
    align-items: center;
    justify-content:center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    padding: 50px;
  `

// The modal "window"
const ModalStyle = styled.div`
    display:flex;
    background: #fff;
    flex-direction:column;
    align-items: center;
    border-radius: 5px;
    width: 500px;
    height: 300px;
    margin: 0 auto;
    padding: 20px;
  `

const CloseModalButton = styled.button`
    align-self: flex-end;
    border:none;
    font-size:large;
    cursor:pointer;
    background: orangered;
    border-radius: 3px;
    color:white

  `



const PopUpModal = ({ isShowing, hide, Content }) => isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <BackdropStyle>

      <ModalStyle >
        <CloseModalButton onClick={hide}>close</CloseModalButton>
        <Content></Content>
      </ModalStyle>

    </BackdropStyle>
  </React.Fragment>, document.body



) : null;


export default PopUpModal;