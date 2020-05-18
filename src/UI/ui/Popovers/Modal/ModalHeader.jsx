import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.section`
    padding: 1em 1.25em;
    background-color: #FFF;
    border-bottom: 1px solid #ADADAD;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const Title = styled.h3`
    font-size: 1.125rem;
    color: rgba(0, 0, 0, 0.87);
    line-height: 24px;
    font-weight: bold;
    font-family: Helvetica;
    margin: 0;
`;

const Subtitle = styled.span`
    font-size: 0.875rem;
    color: rgba(80, 80, 80, 0.87);
    line-height: 18px;
    font-weight: 500;
    font-family: Helvetica;
    margin: 0;
`;

export default ({
    title,
    subtitle,
    className
}) => (
    <HeaderContainer className={ className }>
        <Title>{ title }</Title>
        {
            subtitle
            ? <Subtitle>{ subtitle }</Subtitle>
            : null
        }
    </HeaderContainer>
);
