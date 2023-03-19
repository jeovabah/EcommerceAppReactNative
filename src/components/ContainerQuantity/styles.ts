import styled from "styled-components/native";

export const ContainerQuantity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleLight = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing.small}px;
`;
