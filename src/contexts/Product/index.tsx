import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { api } from "../../services/api";

interface ContextProps {
  products: any;
  getProducts: any;
  handleAddProduct: any;
  handleLoadProduct: any;
  selectedsProduct: any;
  handleRemoveProduct: any;
}

const ProductContext = createContext({} as ContextProps);
export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState([]);
  const [selectedsProduct, setSelectedsProduct] = useState([]);

  const getProducts = useCallback(async () => {
    const { data } = await api("products");
    setProducts(data);
  }, []);

  const handleAddProduct = useCallback(
    async (product) => {
      const storageProducts = await AsyncStorage.getItem("selectedsProduct");
      let productsSelecteds = [];

      if (storageProducts) {
        productsSelecteds = await JSON.parse(storageProducts);
      }
      productsSelecteds.push(product);

      await AsyncStorage.setItem(
        "selectedsProduct",
        JSON.stringify(productsSelecteds)
      );
      setSelectedsProduct(productsSelecteds);
    },
    [AsyncStorage, setSelectedsProduct]
  );

  const handleLoadProduct = useCallback(async () => {
    const storageProducts = await AsyncStorage.getItem("selectedsProduct");

    if (storageProducts) {
      setSelectedsProduct(JSON.parse(storageProducts));
    }
  }, []);

  const handleRemoveProduct = useCallback(async (product) => {
    const storageProducts = await AsyncStorage.getItem("selectedsProduct");
    let productsSelecteds = [];
    if (storageProducts) {
      productsSelecteds = await JSON.parse(storageProducts);
    }

    let filtered = productsSelecteds.filter((item) => item.id !== product.id);

    await AsyncStorage.setItem("selectedsProduct", JSON.stringify(filtered));
    setSelectedsProduct(filtered);
  }, []);

  useEffect(() => {
    handleLoadProduct();
  }, []);

  const value = useMemo(() => {
    return {
      products,
      getProducts,
      handleAddProduct,
      handleLoadProduct,
      selectedsProduct,
      handleRemoveProduct,
    };
  }, [
    products,
    getProducts,
    handleAddProduct,
    handleLoadProduct,
    selectedsProduct,
    handleRemoveProduct,
  ]);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export const useProduct = () => {
  const context = useContext(ProductContext);
  return context;
};
