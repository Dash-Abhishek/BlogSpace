import React from 'react';
import styled from 'styled-components';

import Layover from './Layover';

const ModalContent = styled.div`
    position: relative;
    width: max-content;
    height: max-content;
`;

const CloseIcon = styled.span`
    font-size: 1.5rem;
    font-weight: 200;
    padding:0.5em;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
`;

export default ({
    onClose = () => {},
    open,
    children
}) => {
    return (
        <Layover open={ open } onClose={ onClose } >
            <ModalContent>
                <CloseIcon onClick={ onClose } >X</CloseIcon>
                {
                    children
                }
            </ModalContent>
        </Layover>
    );
}
