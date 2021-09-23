import React, { useState } from 'react';

import logo from '../../assets/images/logo.svg';
import house from '../../assets/icons/buy-a-house.svg';

import {
  Container,
  Header,
  LogoImage,
  Title,
  BoldText,
  Card,
  Icon,
  TitleTextContainer,
  CardTitleContainer,
  CardTitle,
  CardSubTitle,
  Form,
  Fields,
  InputContainer,
  InputLabel,
  AmountCard,
  AmountContainer,
  AmountText,
  AmountValue,
  AmountDetail,
  AmountDetailText,
  Button,
  MonthInput,
} from './styles';
import { MoneyInput } from '../../components/MoneyInput';
import { MonthSelector } from '../../components/MonthSelector';

export function Home(): JSX.Element {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Header>
        <LogoImage src={logo} />
      </Header>

      <Title>
        Let&apos;s plan your <BoldText>saving goal.</BoldText>
      </Title>

      <Card>
        <CardTitleContainer>
          <Icon src={house} />
          <TitleTextContainer>
            <CardTitle>Buy a house</CardTitle>
            <CardSubTitle>Saving goal</CardSubTitle>
          </TitleTextContainer>
        </CardTitleContainer>

        <Form>
          <Fields>
            <MoneyInput />

            <MonthSelector />
          </Fields>

          <AmountCard>
            <AmountContainer>
              <AmountText>MonthlyAmount</AmountText>
              <AmountValue>$521</AmountValue>
            </AmountContainer>
          </AmountCard>
          <AmountDetail>
            <AmountDetailText>
              You&apos;re planing 48 monthly deposits to reach your $25,000 goal
              by October 2020.
            </AmountDetailText>
          </AmountDetail>

          <Button>Confirm</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Home;
