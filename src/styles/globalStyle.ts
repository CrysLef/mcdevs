import { globalCss } from "./theme";


export const globalStyles = globalCss({
  '*': { 
    margin: 0, 
    padding: 0,
    boxSizing: 'border-box'
  },
  'body': {
    backgroundColor: '$background',
    fontFamily: '$default',
    overflowX: 'hidden',
  },
  'li': {
    listStyle: 'none'
  }
});