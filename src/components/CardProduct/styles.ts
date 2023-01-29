import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  position: relative;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const BadgeAdd = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background_global};
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  padding: 4px;

  z-index: 1;
`;

export const ContainerImage = styled.View`
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageItem = styled.Image`
  height: ${RFValue(135)}px;
  width: ${RFValue(135)}px;
  z-index: 1;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Products = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
