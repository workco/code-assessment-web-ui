import { theme, mq, getColumns } from '../../theme';

export default {
  wrapper: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: theme.colors.black35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    position: 'relative',
    backgroundColor: theme.colors.white,
    width: getColumns(15, 'small', 30),
    height: 'auto',
    maxHeight: 'calc(100vh - 70px)',
    display: 'flex',
    overflowY: 'auto',
    flexDirection: 'column',
    [mq[0]]: {
      width: getColumns(14, 'medium'),
      maxHeight: 'calc(100vh - 80px)'
    },
    [mq[1]]: {
      width: getColumns(26, 'large'),
      flexDirection: 'row',
      maxHeight: 'calc(100vh - 140px)'
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: getColumns(1, 'small', 30),
    width: 15,
    height: 15,
    [mq[0]]: {
      top: 45,
      right: getColumns(1, 'medium'),
      width: 20,
      height: 20
    },
    [mq[1]]: {
      right: getColumns(1, 'large')
    }
  },
  section: {
    width: '100%',
    padding: `20px ${getColumns(1, 'small', 30)}`,
    [mq[0]]: {
      padding: `45px ${getColumns(1, 'medium')}`
    },
    [mq[1]]: {
      padding: `45px ${getColumns(1, 'large')}`
    }
  },
  products: {
    [mq[1]]: {
      width: getColumns(17, 'large')
    }
  },
  productList: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    height: 'calc(100% - 45px)',
    [mq[0]]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    [mq[1]]: {
      width: getColumns(15, 'large')
    }
  },
  summary: {
    backgroundColor: theme.colors.lightGray,
    [mq[1]]: {
      width: getColumns(9, 'large')
    }
  },
  heading: {
    marginBottom: 35
  },
  headingSummary: {
    marginRight: 20
  },
  summaryRow: {
    width: '100%',
    marginBottom: 20,
    '&:last-child': {
      borderTop: '1px solid #d5d5d5',
      paddingTop: 20
    }
  },
  summaryItem: {
    display: 'inline-block',
    width: '50%',
    '&:nth-child(even)': {
      textAlign: 'right'
    }
  },
  summaryItemBold: {
    fontWeight: 'bold'
  },
  checkoutBtn: {
    width: '100%'
  },
  text: {
    width: '100%',
    margin: 0
  },
  empty: {
    height: '60%',
    minHeight: 400,
    padding: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    [mq[1]]: {
      padding: 0,
      flexDirection: 'column'
    }
  },
  emptyImage: {
    marginBottom: 35,
    maxWidth: '100%'
  }
};
