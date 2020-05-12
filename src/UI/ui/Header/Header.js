import React, { useEffect } from 'react'
import styled from 'styled-components';
import SubscribeButton from '../Common/SubcribeButton';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
    display:flex;
    position: fixed;
    width:100%;
    padding: 20px 30px 10px 30px;
    color: black;
    font-weight: 200;
    font-size: x-large;
    font-family: sans-serif;
    background: white;
    justify-content: space-between;
`;

const NavItems = styled.div`
    display:flex;
    justify-content: space-between;
    flex-basis: 50%;
`;

const Item = styled(Link)`
    display:flex;
    text-decoration:none;
    font-size: xx-large;
    
    color:black;

    &:hover{
        text-decoration:none;
        font-weight: bolder;
        color:black;
        }
`;

const Logo = styled(Link)`
    diplay:flex;
    font-weight:800;
    font-size: larger;
    color:black;

    &:hover{
        text-decoration:none;
        color:black;
        }
`;

const Header = ({
    getCategories,
    categories
}) => {
    useEffect(() => {
        if (!categories || (categories.length === 0)) {
            getCategories();
        }
    }, []);

    return (
        <NavBar>
            <Logo to="/">BlogSpace</Logo>
            <NavItems>
                {
                    categories
                        ? categories.map(category => <Item to={'/' + category} key={category} >{category}</Item>)
                        : null
                }
            </NavItems>
            <SubscribeButton />
        </NavBar>
    );
}

export default Header;
