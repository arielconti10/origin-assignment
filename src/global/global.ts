/* eslint-disable @typescript-eslint/naming-convention */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;