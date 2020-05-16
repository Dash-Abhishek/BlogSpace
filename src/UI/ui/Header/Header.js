import React, { useEffect } from 'react'
import styled from 'styled-components';
import SubscribeButton from '../Common/SubcribeButton';
import Modal from '../Popovers/Modal';
import Auth from '../Auth';


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
const LoginButton = styled.button`
    background-color: gold;
    padding: 0.25em 1.5em;
    border: none;
    outline: none;
`;

const Header = ({
    getCategories,
    categories,
    isLoggedIn,
    showAuthModal,
    toggleAuthModal
}) => {
    useEffect(() => {
        if(!categories || (categories.length === 0)) {
            getCategories();
        }
    }, []);

    return (
        <NavBar>
            <Modal onClose={ () => {
                toggleAuthModal();
            } } open={ showAuthModal } >
                <Auth />
            </Modal>
            <Logo>BlogSpace</Logo>
            <NavItems>
                {
                    categories
                    ? categories.map(c => <Item key={ c } >{ c }</Item>)
                    : null
                }
            </NavItems>
            {
                isLoggedIn ? (
                    <SubscribeButton />
                ) : (
                    <LoginButton onClick={ () => toggleAuthModal() }>
                        Login
                    </LoginButton>
                )
            }
        </NavBar>
    );
}

export default Header;
