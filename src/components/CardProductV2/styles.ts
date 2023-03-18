import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  position: relative;
  padding: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5;
`;

export const BadgeAdd = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  padding: 4px;

  z-index: 1;
`;

export const ContainerImage = styled.View`
  border-radius: ${({ theme }) => theme.borderRadius.xlarge}px;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export const ImageItem = styled.Image`
  height: ${RFValue(250)}px;
  width: ${RFValue(250)}px;
  z-index: 1;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const TitleML = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small - 2}px;
  color: ${({ theme }) => theme.colors.grayLight};

  align-self: flex-start;
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.small}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Products = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const ContainerCardAdd = styled.View`
  min-width: 80%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large}px;

  background-color: rgba(255, 255, 255, 0.9);

  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5;

  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
`;

export const ContainerPrice = styled.View``;
