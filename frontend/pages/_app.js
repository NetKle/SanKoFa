import '../styles/globals.css'
import { createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Header from '../components/Header';
import Container from '@mui/material/Container';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const theme = createTheme({
  direction: 'rtl',
  fontSize: '2rem',
  lightGrey: '#E7EAF3',
  midGrey:'#B0B4C4',
  purple: '#6358D8',
  lightPurple: '#8B83E2',
  almostBlack: '#52555D',
  typography: {
    fontFamily: ['Heebo']
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <Container>
          <Header/>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </RTL>
  )
}

export default MyApp
