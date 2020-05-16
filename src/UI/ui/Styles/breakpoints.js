import { css } from 'styled-components';
const screenSizeRanges = {
    xs: { max:  '640px' }, // max-width 640px, mobile first
    sm: { min:  '641px' }, // min-width 641px, medium screens
    tm: { min:  '960px' }, // min-width 960px, tablet portrait
    md: { min:  '1025px' }, // min-width 1025px, large screens
    lg: { min: '1441px'}, // min-width 1441px, xlarge screens
    xl: { min: '1921px'} // min-width 1921px, xxlarge screens
};

const screens = {
    smOnly: { min: screenSizeRanges.sm.min, max: `calc(${screenSizeRanges.md.min} - 1px)` }, //641 - 1024
    tmOnly: { min: screenSizeRanges.tm.min, max: `calc(${screenSizeRanges.md.min} - 1px)` }, //960 - 1024
    mdOnly: { min: screenSizeRanges.md.min, max: `calc(${screenSizeRanges.lg.min} - 1px)` }, //1025 -1440
    lgOnly: { min: screenSizeRanges.lg.min, max: `calc(${screenSizeRanges.xl.min} - 1px)` } //1441 -1920
};

export default Object.entries({
    ...screenSizeRanges,
    ...screens
}).reduce((acc, [k, v]) => {
    let query = '';
    if(v.min) {
        query = `${query}(min-width: #{${v.min}})`;
    }
    if(v.min && v.max) {
        query = `${query} and `;
    }
    if(v.max) {
        query = `${query}(max-width: #{${v.max}})`;
    }

    acc[k] = (...content) => css`
        @media screen and #{${query}} { ${content}; }
	`;
	return acc;
}, {});