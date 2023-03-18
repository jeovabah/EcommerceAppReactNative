import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import theme from "../styles/theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Home } from "../screen/Home";
import { RFValue } from "react-native-responsive-fontsize";
import { Cart } from "../screen/Cart";
import { Badge, MenuIcon, TextBadge } from "../screen/Home/styles";
import { useProduct } from "../contexts/Product";
import { DetailsItem } from "../screen/DetailsItem";

export const AppRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  const { selectedsProduct } = useProduct();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#999",
        // tabBar Floating
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: theme.colors.background_dark,
          borderTopWidth: 0,
          height: RFValue(50),
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          marginHorizontal: 20,
          marginBottom: 20,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(12),
          fontFamily: theme.fonts.regular,
        },

        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: RFValue(50),
          justifyContent: "flex-end",
        },
      }}
    >
      <Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={RFValue(24)} color={color} />
          ),
        }}
      />
      <Screen
        name={"DetailsItem"}
        component={DetailsItem}
        // options={{ tabBarShowLabel: false, tabBarStyle: { display: "none" } }}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-heart" size={RFValue(24)} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Screen
        name={"Cart"}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
            height: 60,
          },
          headerTintColor: theme.colors.secondary,
          // headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
            color: theme.colors.secondary,
          },
          headerRight: () => (
            <>
              <MenuIcon
                style={{
                  marginRight: 5,
                  marginTop: 5,
                }}
              >
                <MaterialIcons name="shopping-bag" size={RFValue(24)} />
                <Badge>
                  <TextBadge>{selectedsProduct.length}</TextBadge>
                </Badge>
              </MenuIcon>
            </>
          ),

          tabBarIcon: ({ color }) => (
            <Ionicons name="md-cart" size={RFValue(24)} color={color} />
          ),

          headerTitle: "Carrinho",
        }}
        component={Cart}
      />
    </Navigator>
  );
};
