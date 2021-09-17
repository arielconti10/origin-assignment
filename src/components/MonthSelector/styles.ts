/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Container = styled.div``;

export const InputLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blueGray900};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};

  padding: 4px 20px;
  margin-top: 8px;

  max-width: 192px;
`;

export const PreviousMonth = styled.span``;

export const MonthSelected = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 5px 30px;
`;

export const NextMonth = styled.span``;

export const Month = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.blueGray900};

  margin-bottom: 5px;
`;

export const Year = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.blueGray100};
`;
