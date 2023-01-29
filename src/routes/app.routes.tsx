import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import theme from "../styles/theme";
import { FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";
import { Home } from "../screen/Home";
import { RFValue } from "react-native-responsive-fontsize";

export const AppRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

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
        options={{
          animationEnabled: true,
          // tabBarIcon: ({ focused }) => {
          //   return (
          //     <Entypo
          //       name="home"
          //       size={30}
          //       color={focused ? theme.colors.primary : theme.colors.black}
          //     />
          //   );
          // },
        }}
        component={Home}
      />
      <Screen
        name={"Cart"}
        options={{
          animationEnabled: true,

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
        component={Home}
      />
    </Navigator>
  );
};
