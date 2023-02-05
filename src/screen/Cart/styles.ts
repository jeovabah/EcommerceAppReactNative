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
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
`;

export const MenuIcon = styled.TouchableOpacity`
  border-radius: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const Badge = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 5px;
  padding: 2px 5px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextBadge = styled.Text`
  color: ${({ theme }) => theme.colors.background_global};
  font-size: ${({ theme }) => theme.fontSizes.small - 2}px;
  font-weight: bold;
`;

export const ImageItem = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.large}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;
export const ContentItem = styled.View`
  flex-direction: column;
  width: ${RFValue(110)}px;
  justify-content: space-around;
  height: ${RFValue(100)}px;

  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;
