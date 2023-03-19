import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { useProduct } from "../../contexts/Product";
import theme from "../../styles/theme";
import { MaskMoneyBr } from "../../utils/Helper";
import {
  BadgeAdd,
  Container,
  ContainerCardAdd,
  ContainerImage,
  ContainerPrice,
  ImageItem,
  Price,
  Title,
  TitleML,
} from "./styles";

interface Props {
  item: {
    id: number;
    name: string;
    url_image: string;
    price: number;
  };
}

export const CardProductV2 = ({ item }: Props) => {
  const { handleAddProduct } = useProduct();
  const { navigate } = useNavigation<any>();
  return (
    <Container
      onPress={() => {
        navigate("DetailsItem", { item: item });
      }}
      activeOpacity={0.7}
    >
      <BadgeAdd onPress={() => {}}>
        <Ionicons
          name={"heart-outline"}
          size={RFValue(24)}
          color={theme.colors.primary}
        />
      </BadgeAdd>
      <ContainerImage>
        <ImageItem
          style={{ resizeMode: "contain" }}
          source={{ uri: item?.url_image }}
        />
      </ContainerImage>
      <ContainerCardAdd>
        <ContainerPrice>
          <Title>
            {item?.name.length > 20
              ? `${item?.name.substring(0, 20)}...`
              : item?.name}
          </Title>
          <Price>{MaskMoneyBr(item?.price)}</Price>
        </ContainerPrice>
        {/* @ts-ignore */}
        <TitleML>{item?.ml > 0 ? `${item?.ml}ml` : "300ml"}</TitleML>
        <Ionicons
          onPress={() => handleAddProduct(item)}
          name={"add-circle-outline"}
          size={RFValue(24)}
          color={theme.colors.primary}
        />
      </ContainerCardAdd>
    </Container>
  );
};
