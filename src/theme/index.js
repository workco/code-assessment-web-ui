const breakpoints = [375, 768, 1440];
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

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
      fontFamily: '"Raleway", serif',
      fontSize: 14
    }
  }
};
