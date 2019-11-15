const breakpoints = [375, 768, 1440];
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const theme = {
  colors: {
    black: '#000',
    lightGray: '#f3f3f3',
    darkGray: '#eaeaea',
    white: '#fff',
    orange: '#ff5f3d'
  },
  typography: {
    heading: {
      fontFamily: 'Helvetica, sans-serif',
      textTransform: 'uppercase',
      fontSize: 20,
      [mq[0]]: {
        fontSize: 24
      }
    },
    link: {
      fontFamily: 'Garamond, serif',
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
      fontFamily: 'Garamond, serif',
      fontSize: 14
    }
  }
};
