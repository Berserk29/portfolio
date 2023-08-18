// TODO THE TABLET AND MOBILE CAN CHANGE

const mediaQuery = {
    useBigScreen: { query: '(min-width: 2300px)' },
    useTablet: { query: '(max-width: 1024px)' },
    useMobile: { query: '(max-width: 600px)' },
    styledBigScreen: '(max-width: 2300px)',
    styledTablet: '(max-width: 1024px)',
    styledMobile: '(max-width: 600px)', 
}

export default mediaQuery;