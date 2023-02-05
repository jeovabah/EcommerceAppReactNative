import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Badge,
  BadgeCategory,
  ButtonCategory,
  Container,
  ContainerCategories,
  ContainerCopy,
  ContainerImage,
  ContainerProducts,
  Content,
  Header,
  ImageBanner,
  MenuIcon,
  TextBadge,
  TextCategory,
  TextCopy,
} from "./styles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { CardProduct } from "../../components/CardProduct";
import { Products } from "../../components/CardProduct/styles";
import { useProduct } from "../../contexts/Product";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Home = () => {
  const {
    getProducts,
    products,
    handleAddProduct,
    handleLoadProduct,
    selectedsProduct,
  } = useProduct();

  const { navigate } = useNavigation<any>();

  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    name: "",
    image: "",
  });
  const [banner, setBanner] = useState(require("../../assets/banner.png"));
  const [title, setTitle] = useState("Coleção");
  const categories = [
    {
      id: 1,
      name: "Wheys",
      image: "https://i.imgur.com/0Z0QY0A.png",
    },
    {
      id: 2,
      name: "Creatinas",
      image: "https://i.imgur.com/0Z0QY0A.png",
    },
    {
      id: 3,
      name: "BCAA",
      image: "https://i.imgur.com/0Z0QY0A.png",
    },
    {
      id: 4,
      name: "Termogênicos",
      image: "https://i.imgur.com/0Z0QY0A.png",
    },
    {
      id: 5,
      name: "Proteínas",
      image: "https://i.imgur.com/0Z0QY0A.png",
    },
    {
      id: 6,
      name: "Vitaminas",
      image: "https://i.imgur.com/0Z0QY0A.png",
    },
  ];

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <MenuIcon>
            <Ionicons name="menu" size={RFValue(24)} />
          </MenuIcon>
          <MenuIcon
            onPress={() => {
              navigate("Cart");
            }}
          >
            <Ionicons name="cart" size={RFValue(24)} />
            <Badge>
              <TextBadge>{selectedsProduct.length}</TextBadge>
            </Badge>
          </MenuIcon>
        </Header>
        <ScrollView>
          <ContainerImage>
            <ImageBanner source={banner} />
          </ContainerImage>
          <ContainerCopy>
            <TextCopy>{title} 🔥 </TextCopy>
          </ContainerCopy>
          <ContainerCategories>
            {categories.length > 0 &&
              categories.map((category, index) => (
                <ButtonCategory
                  isActive={false}
                  onPress={() => setSelectedCategory(category)}
                  key={index}
                  activeOpacity={0.7}
                >
                  <TextCategory isActive={selectedCategory.id === category.id}>
                    {category?.name}
                  </TextCategory>

                  {selectedCategory.id === category.id && <BadgeCategory />}
                </ButtonCategory>
              ))}
          </ContainerCategories>
          <ContainerProducts>
            <ScrollView
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              style={{
                width: "100%",
              }}
            >
              {products.length > 0 &&
                products.map((product, index) => (
                  <ButtonCategory
                    onPress={() => {
                      setSelectedCategory(product);
                      navigate("DetailsItem", { item: product });
                    }}
                    key={index}
                    activeOpacity={0.7}
                  >
                    <CardProduct item={product} />
                  </ButtonCategory>
                ))}
            </ScrollView>
          </ContainerProducts>
        </ScrollView>
      </Content>
    </Container>
  );
};
