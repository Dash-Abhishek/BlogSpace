import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.section`
    padding: 1em 1.25em;
    background-color: #FFF;
    border-top: 1px solid #ADADAD;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${({ theme: {breakpoints: {md}} }) => md`
        justify-content: flex-end;
        flex-direction: row;
    `};
`;
const Button = styled.button`
    ${({theme: {buttons}, btnType}) => buttons[btnType] || btnType.default};

    margin-left: 0;
    margin-bottom: 1em;
    &:last-child {
        margin-bottom: 0;
    }
    ${({theme: {breakpoints: {md}}}) => md`
        margin-left: 1em;
        &:first-child {
            margin-left: 0;
        }
        margin-bottom: 0;
    `};
`;

export default ({
    buttons = [],
    className,
    children
}) => (
    <FooterContainer className={ className }>
        {
            buttons.map(({text, ...attrs}) => (
                <Button key={text} {...attrs} >
                    { text }
                </Button>
            ))
        }
        {
            children
        }
    </FooterContainer>
);
