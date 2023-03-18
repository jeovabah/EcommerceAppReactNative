import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Dimensions, Image } from "react-native";
import { useState, useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Badge,
  BadgeCategory,
  ButtonCategory,
  ButtonChoice,
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
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import { CardProduct } from "../../../components/CardProduct";

interface Props {
  selectedsProduct: any;
  setSelectedCategory: any;
  categories: any;
  products: any;
  title: string;
  banner: any;
}

export const HomeV1 = ({
  selectedsProduct,
  setSelectedCategory,
  categories,
  products,
  title,
  banner,
}: Props) => {
  const { navigate } = useNavigation<any>();

  return (
    <>
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
                <ButtonChoice
                  isActive={false}
                  onPress={() => setSelectedCategory(category)}
                  key={index}
                  activeOpacity={0.7}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 5,
                    }}
                    source={{ uri: category?.image }}
                  />
                </ButtonChoice>
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
    </>
  );
};
