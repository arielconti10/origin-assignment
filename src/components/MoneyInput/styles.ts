/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};

  padding: 0;
  margin-top: 8px;
  max-width: 272px;
`;

export const InputLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blueGray900};
`;

export const Input = styled(CurrencyInput)`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: 24px;
  border: 0;
  max-width: 200px;
  border-radius: 5px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.blueGray600};
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  padding: 16px 12px;
`;
