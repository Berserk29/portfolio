// TODO THE TABLET AND MOBILE CAN CHANGE

const mediaQuery = {
    useBigScreen: { query: '(min-width: 2300px)' },
    useTablet: { query: '(max-width: 1200px)' },
    useSmTablet: { query: '(max-width: 800px)' },
    useMobile: { query: '(max-width: 500px)' },
    styledBigScreen: '(max-width: 2300px)',
    styledTablet: '(max-width: 1200px)',
    styledSmTablet: '(max-width: 800px)',
    styledMobile: '(max-width: 500px)', 
}

export default mediaQuery;