import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
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
import banner from "../../assets/banner.png";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { CardProduct } from "../../components/CardProduct";
import { Products } from "../../components/CardProduct/styles";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    name: "",
    image: "",
  });
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
  const products = [
    {
      id: 1,
      name: "Whey Protein",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 2,
      name: "Creatina",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 3,
      name: "BCAA",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 4,
      name: "Termogênico",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 5,
      name: "Proteína",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 1,
      name: "Whey Protein",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 2,
      name: "Creatina",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 3,
      name: "BCAA",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 4,
      name: "Termogênico",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 5,
      name: "Proteína",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 1,
      name: "Whey Protein",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 2,
      name: "Creatina",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 3,
      name: "BCAA",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 4,
      name: "Termogênico",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 5,
      name: "Proteína",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 1,
      name: "Whey Protein",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 2,
      name: "Creatina",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 3,
      name: "BCAA",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 4,
      name: "Termogênico",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
    {
      id: 5,
      name: "Proteína",
      image: "https://i.imgur.com/0Z0QY0A.png",
      price: 100,
    },
  ];
  return (
    <Container>
      <Content>
        <Header>
          <MenuIcon>
            <Ionicons name="menu" size={RFValue(24)} />
          </MenuIcon>
          <MenuIcon>
            <Ionicons name="cart" size={RFValue(24)} />
            <Badge>
              <TextBadge>1</TextBadge>
            </Badge>
          </MenuIcon>
        </Header>
        <ScrollView>
          <ContainerImage>
            <ImageBanner source={banner} />
          </ContainerImage>
          <ContainerCopy>
            <TextCopy>Coleção de Suplementos 🔥 </TextCopy>
          </ContainerCopy>
          <ContainerCategories>
            {categories.length > 0 &&
              categories.map((category) => (
                <ButtonCategory
                  isActive={false}
                  onPress={() => setSelectedCategory(category)}
                  key={category.id}
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
                justifyContent: "flex-start",
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              style={{
                width: "100%",
              }}
            >
              {products.length > 0 &&
                products.map((product) => (
                  <ButtonCategory
                    onPress={() => setSelectedCategory(product)}
                    key={product.id}
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

const styles = StyleSheet.create({
  background: {
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    width: "100%",
  },
});
