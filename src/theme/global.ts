import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
import { fontFamily } from './font';

const GlobalStyles = createGlobalStyle`
    ${fontFamily}
    ${normalize};

    :root {
        --bottom-notch-height: env(safe-area-inset-bottom);
    }

    /**
   * We find it much easier to reason with border-box as the default box-sizing.
   */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        /**
    * The default font size for browsers is 16px.
    * We apply a size of 62.5% so that, by default, all math with rems will use
    * 10px as a base instead of 16px.
    */
        font-size: 62.5%;
    }

    body {
        margin: 0;
        min-height: 100%;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        font-family: 'BR Firma', sans-serif;
        font-size: 1.6rem;
    }

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    /**
   * We include #root as well for the storybook. At the time of writing
   * there seems to be no way to alter the root div id.
   */
    body,
    #__next,
    #root {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
    }

    #__next,
    #root {
        min-height: 100%;
    }

    u,
    a {
        @supports (text-underline-offset: 0.4rem) {
            text-underline-offset: 0.4rem;
            padding-bottom: 0.1rem;
        }
        @supports not (text-underline-offset: 0.4rem) {
            text-underline-position: under;
        }
    }

    .link {
        color: inherit;
        text-decoration: none;
        outline: none;
    }
`;

export { GlobalStyles };
