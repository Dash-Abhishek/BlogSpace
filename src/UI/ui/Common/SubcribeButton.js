import styled from 'styled-components'
import React from 'react';
import PopUpModal from './Modal/Modal'
import useModal from './Modal/UseModal'
import SubscriptionForm from './Subscription';


const SubscribeButtonStyle = styled.button`
    bsckground: gold;
    border: none;
    background: coral;
    color: white;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
`;


const SubscribeButton = () => {

    const { isShowing, toggle } = useModal();
    // const subscriptionContent = SubscriptionForm;


    return (

        <>
            <SubscribeButtonStyle onClick={toggle}>Subcribe</SubscribeButtonStyle>
            <PopUpModal isShowing={isShowing} hide={toggle} Content={SubscriptionForm}></PopUpModal>
        </>
    )

}



export default SubscribeButton;