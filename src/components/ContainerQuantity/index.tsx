import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { useProduct } from "../../contexts/Product";
import theme from "../../styles/theme";
import { ContainerQuantity, TitleLight } from "./styles";

interface Props {
  item: any;
}

export const ContainerQuantityItem = ({ item }: Props) => {
  const { handleRemoveProduct, handleAddQuantity, handleRemoveQuantity } =
    useProduct();
  return (
    <ContainerQuantity>
      <>
        <TouchableOpacity
          onPress={() => {
            if (item?.quantity === 1) return handleRemoveProduct(item);

            handleRemoveQuantity(item);
          }}
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Ionicons
            name={"remove"}
            size={RFValue(20)}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <TitleLight>{item?.quantity || 0}</TitleLight>

        <TouchableOpacity
          onPress={() => handleAddQuantity(item)}
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Ionicons
            name={"add"}
            size={RFValue(20)}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </>
    </ContainerQuantity>
  );
};
