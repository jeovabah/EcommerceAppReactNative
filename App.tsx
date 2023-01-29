import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { AppRoutes } from "./src/routes/app.routes";
import { Container } from "./src/screen/Home/styles";
import theme from "./src/styles/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <AppRoutes />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
