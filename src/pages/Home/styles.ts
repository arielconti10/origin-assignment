/* eslint-disable @typescript-eslint/naming-convention */
import styled, { ThemeContext } from 'styled-components';

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

export const Card = styled.div`
  width: 560px;
  background-color: ${({ theme }) => theme.colors.shape};

  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;

  padding: 35px 40px;
  margin-top: 24px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CardTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.blueGray900};

  margin-bottom: 8px;
`;
export const CardSubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.blueGray400};
`;

export const TitleTextContainer = styled.div``;

export const Icon = styled.img`
  margin-right: 16px;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 24px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContainer = styled.div``;

export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blueGray900};
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: 24px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};

  width: 100%;
  padding: 14px 13px;
  margin-top: 5px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.blueGray600};
  }
`;

export const AmountCard = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  padding: 24px 32px;
  margin-top: 24px;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AmountText = styled.p`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
`;

export const AmountValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: 32px;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const AmountDetail = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;

  border: 1px solid ${({ theme }) => theme.colors.blueGray50};
  border-radius: 4px;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const AmountDetailText = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  padding: 24px 32px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 320px;

  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  padding: 18px 0;
  margin-top: 50px;
`;
