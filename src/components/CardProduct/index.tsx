import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useProduct } from "../../contexts/Product";
import theme from "../../styles/theme";
import { MaskMoneyBr } from "../../utils/Helper";
import {
  BadgeAdd,
  Container,
  ContainerImage,
  ImageItem,
  Price,
  Title,
} from "./styles";

interface Props {
  item: {
    id: number;
    name: string;
    url_image: string;
    price: number;
  };
}

export const CardProduct = ({ item }: Props) => {
  const { handleAddProduct } = useProduct();

  return (
    <Container>
      <BadgeAdd onPress={() => handleAddProduct(item)}>
        <Ionicons
          name={"add"}
          size={RFValue(24)}
          color={theme.colors.primary}
        />
      </BadgeAdd>
      <ContainerImage>
        <ImageItem
          style={{ resizeMode: "stretch" }}
          source={{ uri: item?.url_image }}
        />
      </ContainerImage>
      <Title>
        {item?.name.length > 20
          ? `${item?.name.substring(0, 20)}...`
          : item?.name}
      </Title>
      <Price>{MaskMoneyBr(item?.price)}</Price>
    </Container>
  );
};
