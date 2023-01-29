import { Container, ContainerImage, ImageItem, Price, Title } from "./styles";

interface Props {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

export const CardProduct = ({ item }: Props) => {
  return (
    <Container>
      <ContainerImage>
        <ImageItem source={{ uri: item.image }} />
      </ContainerImage>
      <Title>
        {item.name.length > 20 ? `${item.name.substring(0, 20)}...` : item.name}
      </Title>
      <Price>R${item.price}</Price>
    </Container>
  );
};
