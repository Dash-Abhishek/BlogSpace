
import React from 'react'
import styled from 'styled-components';


const Footer = () => {


    const NavBar = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:100%;
    background: black;

    
    `

    const ContactPannel = styled.div`
    diplay:flex;
    flex-direction:column;
    // background: darkorange;
    color: white;
    width:40%;
    margin-top:20px;
    `


    const SubcribeButton = styled.button`
    border: none;
    border-radius: 5px;
    background: darkorange;
    height:30%;
    width:10%;
    color: white;

    `


    return (

        <NavBar>
            <ContactPannel>
                <h4>Terms of use</h4>
                <p>Under development</p>
                <p>© 2020 Copyright opensource </p>
            </ContactPannel>
            <SubcribeButton>Subcribe</SubcribeButton>

        </NavBar>


    )

}


export default Footer;