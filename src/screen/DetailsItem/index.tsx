import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useProduct } from "../../contexts/Product";
import theme from "../../styles/theme";
import { MaskMoneyBr } from "../../utils/Helper";
import {
  ButtonAddCard,
  CardProduct,
  Container,
  ContainerAdd,
  ContainerBottom,
  ContainerDescription,
  Content,
  Description,
  ImageCart,
  Price,
  Title,
} from "./styles";

export const DetailsItem = ({ route }) => {
  const { navigate } = useNavigation<any>();
  const { item } = route.params;
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
        <CardProduct>
          <ImageCart
            source={{
              uri: item?.url_image,
            }}
          />
          <Title>{item?.name}</Title>
          <ContainerDescription>
            <Description>
              asiojdfaosijdfoai sjdfioasjdfoiasjdofi jasoif
              jasiodjfoiasjdfioasjdf ioasjdfioaj siodfjasiodfjasoidjfio asjdfio
              asjdfiojasdiofjasiodjfaiosjdfaisjdfaoisjdfoia
              jsfdiojsaiodjfsaiodjfaoisjdfaois joifjsadoifjasiodfjasoidj
              fioasjfioasjdfioajsfioasjfidojdsio
            </Description>
          </ContainerDescription>
        </CardProduct>
        <ContainerBottom>
          <Price>{MaskMoneyBr(item?.price)}</Price>

          <ButtonAddCard onPress={() => handleAddProduct(item)}>
            <Ionicons
              name="add"
              size={RFValue(20)}
              color={theme.colors.background_global}
            />
          </ButtonAddCard>
        </ContainerBottom>
      </Content>
    </Container>
  );
};
