import 'styled-components';

import { colors } from './color';
import { fontWeights } from './font';
import { query, media } from './custom-queries';

type MediaTokens = typeof media & { query: typeof query };
type ColorTokens = Partial<typeof colors>;
type FontWeightTokens = Partial<typeof fontWeights>;

declare module 'styled-components' {
    export interface DefaulTheme {
        colors?: ColorTokens;
        fontWeights?: FontWeightTokens;
        media?: MediaTokens;
    }
}
