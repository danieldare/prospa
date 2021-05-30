import { DefaulTheme } from 'styled-components';

import { colors } from './color';
import { fontWeights } from './font';
import { query, media } from './custom-queries';

const theme: DefaulTheme = {
    colors,
    fontWeights,
    media: {
        ...media,
        query,
    },
};

export { theme };
