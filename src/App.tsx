import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import theme from './global/theme';
import { GlobalStyle } from './global/global';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
