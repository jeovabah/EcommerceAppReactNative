import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import theme from "../styles/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "../screen/Home";
import { RFValue } from "react-native-responsive-fontsize";
import { Cart } from "../screen/Cart";
import { Badge, MenuIcon, TextBadge } from "../screen/Home/styles";
import { useProduct } from "../contexts/Product";

export const AppRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  const { selectedsProduct } = useProduct();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: theme.colors.primary,
        // tabBarInactiveTintColor: "#999",
        // tabBarStyle: {
        //   borderRadius: 80,
        //   height: RFValue(30),
        // },
        // tabBarShowLabel: false,
        // tabBarItemStyle: {
        //   height: RFValue(50),
        //   justifyContent: "flex-end",
        // },
      }}
    >
      <Screen
        name={"Home"}
        options={
          {
            // tabBarIcon: ({ focused }) => {
            //   return (
            //     <Entypo
            //       name="home"
            //       size={30}
            //       color={focused ? theme.colors.primary : theme.colors.black}
            //     />
            //   );
            // },
          }
        }
        component={Home}
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
          headerBackTitleVisible: false,
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

          headerTitle: "Carrinho",

          // tabBarIcon: ({ focused }) => {
          //   return (
          //     <Entypo
          //       name="shopping-cart"
          //       size={30}
          //       color={focused ? theme.colors.primary : theme.colors.black}
          //     />
          //   );
          // },
        }}
        component={Cart}
      />
    </Navigator>
  );
};
