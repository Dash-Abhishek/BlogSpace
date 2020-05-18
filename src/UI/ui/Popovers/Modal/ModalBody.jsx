import React from 'react';
import styled from 'styled-components';

const modalSizes = {
    default: '680px',
    small: '305px',
    medium: '600px',
    large: '900px',
    auto: 'auto',
    fullWidth: '90vw'
};

const BodyContainer = styled.section`
    min-width: 300px;
    max-width: 90vw;
    max-height: 90vh;
    height: auto;
    width: 90vw;
    ${({ size, theme: {breakpoints: {md}} }) => md`
        width: ${modalSizes[size] || modalSizes.small};        
    `};
    padding: 1em 1.25em;
    background-color: #FFF;
    overflow: auto;
    text-align: left;
`;

export default ({
    children,
    className
}) => (
    <BodyContainer className={ className }>
        {
            children
        }
    </BodyContainer>
);
