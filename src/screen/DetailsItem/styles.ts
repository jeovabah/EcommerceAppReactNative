import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background_global};
`;

export const Content = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  margin-top: ${({ theme }) => theme.spacing.xslarge}px;
  flex: 1;

  align-items: center;

  position: relative;
`;

export const CardProduct = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large}px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  /* background-color: ${({ theme }) => theme.colors.white}; */
  margin-bottom: ${({ theme }) => theme.spacing.large}px;
  align-items: center;
  justify-content: center;
`;

export const ImageCart = styled.Image`
  width: ${RFValue(350)}px;
  height: ${RFValue(350)}px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xssslarge}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing.small}px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayLight};
  margin-top: ${({ theme }) => theme.spacing.small}px;
`;

export const ContainerDescription = styled.ScrollView`
  max-height: 100px;
`;

export const ContainerBottom = styled.View`
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerAdd = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ButtonAddCard = styled.TouchableOpacity`
  width: 50%;
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
