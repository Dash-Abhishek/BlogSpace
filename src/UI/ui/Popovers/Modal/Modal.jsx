import React from 'react';
import styled from 'styled-components';

import Layover from '../Layover';

const ModalContent = styled.div`
    position: relative;
    width: max-content;
    height: max-content;
    box-shadow: 3px 4px 7px #949494;
    overflow: auto;
    max-height: 100vh;
    max-width: 100vw;
`;

const CloseIcon = styled.span`
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 200;
    padding: 0;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    margin-top: 1rem;
    margin-right: 1.25rem;
    background-color: none;
`;

export default ({
    onClose,
    open,
    children
}) => {
    return (
        <Layover open={ open } onClose={ onClose } >
            <ModalContent>
                {
                    onClose ? (
                        <CloseIcon onClick={ onClose } >X</CloseIcon>
                    ) : null
                }
                {
                    children
                }
            </ModalContent>
        </Layover>
    );
}
