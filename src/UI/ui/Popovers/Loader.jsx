import React from 'react';
import styled from 'styled-components';
import Layover from './Layover';
import loadingIcon from '../../../assets/loading.svg';

const Loader = styled.img.attrs({
    src: loadingIcon,
    alt: 'Loading icon'
})`
    height: 24px;
    width: 24px;
`;

export default ({
    open,
    message
}) => (
    <Layover open={ open }>
        <Loader />
        {
            message
        }
    </Layover>
);
