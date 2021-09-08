import React from 'react';

import logo from '../../assets/images/logo.svg';

import { Container, Header, LogoImage, Title, BoldText, Card } from './styles';

export function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <LogoImage src={logo} />
      </Header>

      <Title>
        Let&apos;s plan your <BoldText>saving goal.</BoldText>
      </Title>
      <Card></Card>
    </Container>
  );
}

export default Home;
