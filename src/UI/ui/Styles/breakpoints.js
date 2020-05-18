import { css } from 'styled-components';
const screenSizeRanges = {
    xs: { max:  '40em' }, // max-width 640px, mobile first
    sm: { min:  '40.063em' }, // min-width 641px, medium screens
    tm: { min:  '60em' }, // min-width 960px, tablet portrait
    md: { min:  '64.063em' }, // min-width 1025px, large screens
    lg: { min: '90.063em'}, // min-width 1441px, xlarge screens
    xl: { min: '120.063em'} // min-width 1921px, xxlarge screens
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
        query = `${query}(min-width: ${v.min})`;
    }
    if(v.min && v.max) {
        query = `${query} and `;
    }
    if(v.max) {
        query = `${query}(max-width: ${v.max})`;
    }

    acc[k] = (...content) => {
        const c = css`
        @media screen and ${query} { ${content.join('')}; }
        `;
        console.log("c: ", c);
        return c;
    }
	return acc;
}, {});