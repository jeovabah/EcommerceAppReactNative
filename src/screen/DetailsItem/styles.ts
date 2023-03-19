import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

interface ColorProps {
  color?: string;
  noBold?: boolean;
}

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background_global};
`;

export const Content = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  flex: 1;
  position: relative;
  align-items: center;

  position: relative;
`;

export const CardProduct = styled.View`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge}px;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const HeaderPage = styled.View`
  position: absolute;
  flex-direction: row;
  top: 50px;
  width: ${width}px;
  padding: 0 ${({ theme }) => theme.spacing.xlarge}px;
  justify-content: space-between;

  z-index: 2;
`;

export const CardQuantity = styled.View`
  position: absolute;
  bottom: -20px;

  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  padding: ${({ theme }) => theme.spacing.small}px
    ${({ theme }) => theme.spacing.medium}px;
  align-items: center;
  justify-content: center;
`;
export const ContainerQuantity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageCart = styled.Image`
  width: ${width}px;
  height: ${RFValue(350)}px;
  border-radius: ${({ theme }) => theme.borderRadius.xxxlarge}px;
`;

export const Title = styled.Text<ColorProps>`
  font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
  font-weight: ${({ noBold }) => (!noBold ? "bold" : "normal")};
  color: ${({ theme, color }) => color || theme.colors.secondary};
`;

export const TitleSmallColor = styled.Text<ColorProps>`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: bold;
  color: ${({ theme, color }) => color || theme.colors.secondary};
`;

export const TitlePrice = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.small}px;
`;

export const TitleLight = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing.small}px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayLight};
  margin-top: ${({ theme }) => theme.spacing.small}px;
`;

export const ContainerDescription = styled.View`
  margin-top: ${({ theme }) => theme.spacing.large}px;
  width: 100%;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export const ContainerBottom = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;

  flex-direction: row;
  padding: 0 ${({ theme }) => theme.spacing.xslarge}px;
`;

export const ContainerAdd = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ButtonAddCard = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;
