import React from 'react'
import styled from 'styled-components';
import Bridge from '../CommBridge/Bridge';
import SubscribeButton from '../Common/Subcription';


const Header = () => {


    const NavBar = styled.div`
    display:flex;
    // align-content:center;
    width:100%;
    color: black;
    font-weight: 200;
    font-size: x-large;
    font-family: sans-serif;
    // background: yellow;
    justify-content: space-between;
    `

    const NavItems = styled.div`
    display:flex;
    justify-content: space-between;
    flex-basis: 50%;
    `

    const Item = styled.div`
    display:flex;
    text-decoration:none;
    font-size: x-large;
    `

    const Logo = styled.div`
    diplay:flex;
    font-weight:800;
    font-size: x-large

    `


    return (

        <NavBar>

            <Logo>BlogSpace</Logo>
            <NavItems>
                <Item>Moto</Item>
                <Item>Tech</Item>
                <Item>Travel</Item>
                <Item>Livestyle</Item>
                <Item>Social</Item>
                <Item>Legal</Item>

            </NavItems>
            <SubscribeButton></SubscribeButton>
            
        </NavBar>


    )

}


export default Header;