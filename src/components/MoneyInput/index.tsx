import React from 'react';

import { Container, InputContainer, InputLabel, Input, Icon } from './styles';

import Money from '../../assets/icons/money.svg';

export function MoneyInput(): JSX.Element {
  return (
    <Container>
      <InputLabel>Total Amount</InputLabel>
      <InputContainer>
        <Icon src={Money} />
        <Input
          id="amount"
          name="amount"
          placeholder="24,000"
          defaultValue={0}
          decimalsLimit={2}
          onValueChange={(value, name) => console.log(value, name)}
        />
      </InputContainer>
    </Container>
  );
}
