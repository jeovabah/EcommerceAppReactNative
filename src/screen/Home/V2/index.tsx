import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Dimensions, Image, View } from "react-native";
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
  TextTitle,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import { CardProduct } from "../../../components/CardProduct";
import { CardProductV2 } from "../../../components/CardProductV2";

interface Props {
  selectedsProduct: any;
  setSelectedCategory: any;
  categories: any;
  products: any;
  title: string;
  banner: any;
}

export const HomeV2 = ({
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
        <ScrollView
          style={{
            marginBottom: RFValue(50),
          }}
        >
          <Header>
            <MenuIcon>
              <Ionicons name="menu" size={RFValue(20)} />
            </MenuIcon>
            <TextTitle>Recomendados</TextTitle>
            <MenuIcon
              onPress={() => {
                navigate("Cart");
              }}
            >
              <Ionicons name="search" size={RFValue(20)} />
            </MenuIcon>
          </Header>
          <ContainerProducts>
            <ScrollView
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
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
                  // <ButtonCategory
                  // onPress={() => {
                  //   setSelectedCategory(product);
                  //   navigate("DetailsItem", { item: product });
                  // }}
                  // key={index}
                  // activeOpacity={0.7}
                  // >
                  <CardProductV2 key={index} item={product} />
                  // </ButtonCategory>
                ))}
            </ScrollView>
          </ContainerProducts>
        </ScrollView>
      </Content>
    </>
  );
};
