import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1200;
    background-color: transparent;
    display: ${({ open }) => open ? 'flex' : 'none'};
    overflow-x: hidden;
    overflow-y: auto;
`;
const Layover = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({background}) => background || `rgb(255,255,255)`};
    -webkit-transition: opacity .15s linear;
    transition: opacity .15s linear;
    opacity: 0.75;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1201;
`;
const Content = styled.section`
    position: relative;
    margin: auto;
    z-index: 1202;
    height: min-content;
    width: min-content;
    text-align: center;
`;

export default ({
    children,
    open,
    onClose = () => {}
}) => (
    <Container open={ open } >
        <Layover onClick={ onClose } />
        <Content>
            {
                children
            }
        </Content>
    </Container>
);