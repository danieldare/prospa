const query = {
    small: '(max-width: 1023px)', // <= 1023px
    mobile: '(max-width: 481px)',
    semiMedium: '(max-width: 600px)',
    medium: '(min-width: 481px) and (max-width: 767px)', // >= 767px && <= 481px
    semiLarge: '(max-width: 876px)', // <= 876px
    large: '(min-width: 1366px) and (max-width: 1919px)', // >= 1366px && <= 1919px
    extraLarge: '(min-width: 1920px)', // >= 1920px

    gteMedium: '(min-width: 1024px)', // >= 1024px
    gteLarge: '(min-width: 1366px)', // >= 1366px

    lteMedium: '(max-width: 1365px)', // <= 1365px
    lteLarge: '(max-width: 1919px)', // <= 1919px
};

const media = {
    small: `@media ${query.small}`, // <= 1023px
    mobile: `@media ${query.mobile}`,
    medium: `@media ${query.medium}`, // >= 1024px && <= 1365px
    semiMedium: `@media ${query.semiMedium}`, // >= 1024px && <= 1365px
    semiLarge: `@media ${query.semiLarge}`, // <= 876px
    large: `@media ${query.large}`, // >= 1366px && <= 1919px
    extraLarge: `@media ${query.extraLarge}`, // >= 1920px

    gteMedium: `@media ${query.gteMedium}`, // >= 1024px
    gteLarge: `@media ${query.gteLarge}`, // >= 1366px

    lteMedium: `@media ${query.lteMedium}`, // <= 1365px
    lteLarge: `@media ${query.lteLarge}`, // <= 1919px
};

export { query, media };
