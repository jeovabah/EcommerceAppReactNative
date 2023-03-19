import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ContainerQuantityItem } from "../../components/ContainerQuantity";
import { useProduct } from "../../contexts/Product";
import theme from "../../styles/theme";
import { MaskMoneyBr } from "../../utils/Helper";
import {
  ButtonAddCard,
  CardProduct,
  CardQuantity,
  Container,
  ContainerBottom,
  ContainerDescription,
  ContainerRow,
  Content,
  Description,
  HeaderPage,
  ImageCart,
  Price,
  Title,
  TitlePrice,
  TitleSmallColor,
} from "./styles";

export const DetailsItem = ({ route }) => {
  const { navigate } = useNavigation<any>();
  const { item } = route.params;
  const { handleAddProduct } = useProduct();

  return (
    <Container>
      <ScrollView
        style={{
          marginBottom: 50,
        }}
      >
        <Content>
          <CardProduct>
            <View
              style={{
                marginBottom: theme.spacing.large,
              }}
            >
              <HeaderPage>
                <Ionicons
                  name="arrow-back-circle-outline"
                  size={RFValue(24)}
                  color={theme.colors.primary}
                  onPress={() => navigate("Home")}
                />
                <Ionicons
                  name="heart-outline"
                  size={RFValue(24)}
                  color={theme.colors.primary}
                />
              </HeaderPage>
              <ImageCart
                resizeMode="stretch"
                source={{
                  uri: item?.url_image,
                }}
              />
              <CardQuantity>
                <ContainerQuantityItem item={item} />
              </CardQuantity>
            </View>

            <ContainerDescription>
              <ContainerRow>
                <Title>{item?.name}</Title>
                <TitlePrice>{MaskMoneyBr(item?.price)}</TitlePrice>
              </ContainerRow>
              <ContainerRow
                style={{
                  paddingHorizontal: theme.spacing.small,
                }}
              >
                <TitleSmallColor>
                  {" "}
                  <Ionicons
                    name="star"
                    size={theme.fontSizes.medium}
                    color={theme.colors.primary}
                  />{" "}
                  {item?.avaliation || "4.4"}{" "}
                </TitleSmallColor>
                <TitleSmallColor color={theme.colors.grayLight}>
                  {item?.ml ? `${item?.ml}ml ` : "300ml"}{" "}
                </TitleSmallColor>
              </ContainerRow>
              <Title
                style={{
                  fontSize: theme.fontSizes.medium,
                  marginTop: theme.spacing.small,
                  marginBottom: theme.spacing.small,
                }}
              >
                Detalhes
              </Title>
              <Description>
                {item?.description ? item?.description : "Sem descrição"}
              </Description>
            </ContainerDescription>
          </CardProduct>
        </Content>
      </ScrollView>
      <ContainerBottom>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.background_dark,
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.borderRadius.large,
          }}
          activeOpacity={0.8}
          onPress={() => {
            handleAddProduct(item);
            navigate("Cart");
          }}
        >
          <Ionicons
            name="cart-outline"
            size={RFValue(24)}
            color={theme.colors.primary}
          />
        </TouchableOpacity>

        <ButtonAddCard
          onPress={() => {
            handleAddProduct(item);
            navigate("Cart");
          }}
        >
          <Title
            style={{
              fontSize: theme.fontSizes.medium,
            }}
            noBold
            color={theme.colors.background_global}
          >
            Comprar agora
          </Title>
        </ButtonAddCard>
      </ContainerBottom>
    </Container>
  );
};
