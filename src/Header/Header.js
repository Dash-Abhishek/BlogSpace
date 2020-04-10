import React from 'react'
import styled from 'styled-components';


const Header = () => {


    const NavBar = styled.div`
    display:flex;
    align-content:center;
    justify-content:center;
    color: black;
    font-weight: 200;
    font-size: x-large;
    font-family: sans-serif;
    // background: aliceblue;
    justify-content: space-between;
    flex-basis: 30%;
    margin-top: 25px;
    
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
    // font-size: xx-large

    `


    return (

        <NavBar>

            <Logo>BlogSpace</Logo>
            <NavItems>
                <Item>Moto</Item>
                <Item>Tech</Item>
                <Item>Livestyle</Item>
                <Item>Travel</Item>
                <Item>Social</Item>
                <Item>Legal</Item>
            </NavItems>

            
                {/* BLogSpace */}

        </NavBar>


    )

}


export default Header;