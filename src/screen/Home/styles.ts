import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ICategoryProps {
  isActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background_global};
`;

export const Content = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  margin-top: ${({ theme }) => theme.spacing.xslarge}px;
  flex: 1;
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

export const HeaderGradient = styled(LinearGradient)`
  height: 300px;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerImage = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xslarge}px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  width: 100%;
  flex: 1;
  max-height: 200px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.7;
  shadow-radius: 10px;
  elevation: 5;
`;

export const ImageBanner = styled.Image`
  width: 100%;
  max-height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
`;

export const ContainerCopy = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xslarge}px;
`;

export const TextCopy = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContainerCategories = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: ${({ theme }) => theme.spacing.xslarge}px;
`;

export const TextCategory = styled.Text<ICategoryProps>`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-weight: bold;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.grayLight};

  margin-right: ${({ theme }) => theme.spacing.large}px;

  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.background_global};

  padding-bottom: 5px;
`;

export const ButtonCategory = styled.TouchableOpacity<ICategoryProps>`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.background_global};

  position: relative;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5;
`;

export const ButtonChoice = styled.TouchableOpacity<ICategoryProps>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.background_global};
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  margin-right: ${({ theme }) => theme.spacing.large}px;
  margin-top: ${({ theme }) => theme.spacing.small}px;
  margin-bottom: ${({ theme }) => theme.spacing.small}px;

  width: 50px;
  height: 50px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5;

  align-items: center;
  justify-content: center;
`;

export const BadgeCategory = styled.View<ICategoryProps>`
  width: 30%;
  align-self: center;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContainerProducts = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xslarge}px;
`;
