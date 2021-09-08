/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
  min-height: 783px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};

  padding: 24px 56px;
`;

export const LogoImage = styled.img`
  height: 32px;
  width: 100px;
`;
