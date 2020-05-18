import { css } from 'styled-components';
const colors = {
    primary: {
        bg: '#007bff'
    },
    secondary: {
        bg: '#6c757d'
    },
    success: {
        bg: '#28a745'
    },
    danger: {
        bg: '#dc3545'
    },
    warning: {
        bg: '#ffc107',
        color: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
        bg: '#17a2b8'
    },
    dark: {
        bg: '#343a40'
    },
    default: {
        bg: 'transparent',
        color: 'rgba(0, 0, 0, 0.87)',
        border: 'rgba(0, 0, 0, 0.87)'
    }
};

export default Object.entries(colors).reduce((acc, [k, v]) => {
    acc[k] = css`
        cursor: pointer;
        border: none;
        outline: none;
        min-width: 75px;
        padding: .375rem .75rem;
        border: ${v.border ? ('1px solid ' + v.border) : 'none'};
        background-color: ${v.bg || 'transparent'};
        color: ${v.color || '#FFF'};
    `;
    return acc;
}, {});
