import { css } from 'styled-components';

export const fontWeights = {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
};

export const fontFamily = css`
    @font-face {
        font-family: 'BR Firma';
        src: url('./src/assets/fonts/BR Firma SemiBold.woff');
        font-weight: 600;
    }

    @font-face {
        font-family: 'BR Firma';
        src: url('./src/assets/fonts/BR Firma Bold.woff');
        font-weight: 700;
    }

    @font-face {
        font-family: 'BR Firma';
        src: url('./src/assets/fonts/BR Firma Regular.woff');
        font-weight: 500;
    }
`;
