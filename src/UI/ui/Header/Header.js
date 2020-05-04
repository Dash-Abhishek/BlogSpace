import React, { useEffect } from 'react'
import styled from 'styled-components';
import SubscribeButton from '../Common/SubcribeButton';


const NavBar = styled.div`
    display:flex;
    position: fixed;
    width:100%;
    color: black;
    font-weight: 200;
    font-size: x-large;
    font-family: sans-serif;
    // background: yellow;
    justify-content: space-between;
`;

const NavItems = styled.div`
    display:flex;
    justify-content: space-between;
    flex-basis: 50%;
`;

const Item = styled.div`
    display:flex;
    text-decoration:none;
    font-size: x-large;
`;

const Logo = styled.div`
    diplay:flex;
    font-weight:800;
    font-size: x-large
`;

const Header = ({
    getCategories,
    categories
}) => {
    useEffect(() => {
        if(!categories || (categories.length === 0)) {
            getCategories();
        }
    }, []);

    return (
        <NavBar>
            <Logo>BlogSpace</Logo>
            <NavItems>
                {
                    categories
                    ? categories.map(c => <Item key={ c } >{ c }</Item>)
                    : null
                }
            </NavItems>
            <SubscribeButton />            
        </NavBar>
    );
}

export default Header;
