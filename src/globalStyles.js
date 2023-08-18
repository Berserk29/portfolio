import { createGlobalStyle } from "styled-components";

import newyorkRegular from './assets/font/newyork-regular-webfont.woff2'
import newyorkMedium from './assets/font/newyork-medium-webfont.woff2'
import newyorkBold from './assets/font/newyork-bold-webfont.woff2'
import newyorkBlack from './assets/font/newyork-black-webfont.woff2'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'New York';
        src: url(${newyorkRegular}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'New York';
        src: url(${newyorkMedium}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'New York';
        src: url(${newyorkBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'New York';
        src: url(${newyorkBlack}) format('woff2');
        font-weight: 900;
        font-style: normal;
    }
`

export default GlobalStyles;