import React, { ReactElement } from 'react';
import { StyledComponent } from 'styled-components';

import logo from '../../assets/images/logo.svg';

import { Container, Header, LogoImage } from './styles';

export function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <LogoImage src={logo} />
      </Header>
    </Container>
  );
}

export default Home;
