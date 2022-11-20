import { globalCss, styled } from './index';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins, sans-serif',
  },

  html: {
    fontSize: '62.5%',
  },
  body: {
    background: 'linear-gradient(119.36deg, #010101 0%, #000000 100%);',
    color: '$white',
    'webkit-font-smoothing': 'antialiased',
    height: '100vh',
  },
  img: {
    maxWidth: '100%',
    display: 'block',
  },
  button: {
    cursor: 'pointer',
  },
});

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1216,
  margin: '0 auto',
});