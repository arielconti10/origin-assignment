/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 783px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 24px 56px;
`;

export const LogoImage = styled.img`
  height: 32px;
  width: 100px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};

  margin-top: 48px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const Card = styled.div``;
