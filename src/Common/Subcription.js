import styled from 'styled-components'
import React from 'react';

const showSbuscriptionModal = () =>{

    console.log("Show modal");
}


const SubscribeButtonStyle = styled.button`
    bsckground: gold;
    border: none;
    background: coral;
    color: white;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
    `


 const SubscribeButton = () =>{


    return (

        <SubscribeButtonStyle onClick = {showSbuscriptionModal}>Subcribe</SubscribeButtonStyle>
    )

 }



export default SubscribeButton;