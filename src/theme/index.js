const breakpoints = [375, 768, 1440];
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const getColumns = (count, breakpoint) => {
  const colCounts = { small: 15, medium: 16, large: 32 };
  const colTotal = colCounts[breakpoint];
  const margin = breakpoint === 'small' ? 30 : 0;
  return `calc(((100vw - (${margin}px * 2)) / ${colTotal}) * ${count})`;
};

export const theme = {
  colors: {
    black: '#000',
    black35: 'rgba(0, 0, 0, 0.35)',
    lightGray: '#f3f3f3',
    darkGray: '#eaeaea',
    white: '#fff',
    orange: '#ff5f3d'
  },
  typography: {
    heading: {
      fontFamily: '"Raleway", sans-serif',
      textTransform: 'uppercase',
      fontSize: 20,
      letterSpacing: 1,
      fontWeight: '900',
      [mq[0]]: {
        fontSize: 24
      }
    },
    heading2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 30,
      fontWeight: 'normal',
      lineHeight: '35px',
      [mq[0]]: {
        fontSize: 40,
        lineHeight: '45px'
      }
    },
    body: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 20,
      lineHeight: '30px',
      letterSpacing: 0.25
    },
    link: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 20,
      fontWeight: 'normal',
      lineHeight: '25px',
      opacity: 1,
      transition: 'opacity 300ms ease-in-out',
      '&:hover': {
        opacity: 0.2
      },
      active: {
        borderBottom: '1px solid currentColor'
      }
    },
    price: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: 14
    }
  }
};
