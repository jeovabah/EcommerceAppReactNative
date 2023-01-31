import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ContainerImage } from "../../components/CardProduct/styles";
import { useProduct } from "../../contexts/Product";
import theme from "../../styles/theme";
import { MaskMoneyBr } from "../../utils/Helper";
import {
  Badge,
  Container,
  ContainerItem,
  ContainerQuantity,
  Content,
  ContentItem,
  Header,
  ImageItem,
  MenuIcon,
  TextBadge,
  Title,
} from "./styles";

export const Cart = () => {
  const { navigate } = useNavigation<any>();
  const {
    getProducts,
    products,
    handleAddProduct,
    handleLoadProduct,
    selectedsProduct,
  } = useProduct();

  return (
    <Container>
      <Content>
        <FlatList
          data={selectedsProduct}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <RenderOptionItem key={index} item={item} />
          )}
        />
      </Content>
    </Container>
  );
};

const RenderOptionItem = ({ item }) => {
  const { handleAddQuantity, handleRemoveQuantity, handleRemoveProduct } =
    useProduct();

  return (
    <ContainerItem>
      <ContainerImage>
        <ImageItem source={{ uri: item?.url_image }} />
      </ContainerImage>

      <ContentItem>
        <Title>{item?.name}</Title>
        <Title>{MaskMoneyBr(item?.price)}</Title>
      </ContentItem>
      <ContainerQuantity>
        <>
          <TouchableOpacity
            onPress={() => handleAddQuantity(item)}
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Ionicons
              name={"add"}
              size={RFValue(24)}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
          <Title>{item?.quantity || 0}</Title>
          <TouchableOpacity
            onPress={() => {
              if (item?.quantity === 1) return handleRemoveProduct(item);

              handleRemoveQuantity(item);
            }}
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Ionicons
              name={"remove"}
              size={RFValue(24)}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </>
      </ContainerQuantity>
    </ContainerItem>
  );
};
