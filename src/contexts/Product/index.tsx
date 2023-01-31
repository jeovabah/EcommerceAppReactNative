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
  handleRemoveQuantity: any;
  handleAddQuantity: any;
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
      const productExists = productsSelecteds.find(
        (item) => item._id === product._id
      );
      if (productExists) {
        productExists.quantity += 1;

        await AsyncStorage.setItem(
          "selectedsProduct",
          JSON.stringify(productsSelecteds)
        );
        setSelectedsProduct(productsSelecteds);
        return;
      }

      if (!productExists) {
        product.quantity = 1;
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
    console.log(product);
    const storageProducts = await AsyncStorage.getItem("selectedsProduct");
    let productsSelecteds = [];
    if (storageProducts) {
      productsSelecteds = await JSON.parse(storageProducts);
    }

    let filtered = productsSelecteds.filter((item) => item._id !== product._id);

    await AsyncStorage.setItem("selectedsProduct", JSON.stringify(filtered));
    setSelectedsProduct(filtered);
  }, []);

  const handleRemoveQuantity = useCallback(async (product) => {
    if (product.quantity > 0) {
      product.quantity = product.quantity - 1;
    }

    const storageProducts = AsyncStorage.getItem("selectedsProduct");
    let productsSelecteds = [];
    if (storageProducts) {
      productsSelecteds = JSON.parse(await storageProducts);
    }

    const productExists = productsSelecteds.find(
      (item) => item._id === product._id
    );
    if (productExists) {
      productExists.quantity -= 1;
    }

    AsyncStorage.setItem("selectedsProduct", JSON.stringify(productsSelecteds));
    setSelectedsProduct(productsSelecteds);
  }, []);

  const handleAddQuantity = useCallback(async (product) => {
    product.quantity = product.quantity + 1;

    const storageProducts = AsyncStorage.getItem("selectedsProduct");
    let productsSelecteds = [];
    if (storageProducts) {
      productsSelecteds = JSON.parse(await storageProducts);
    }

    const productExists = productsSelecteds.find(
      (item) => item._id === product._id
    );
    if (productExists) {
      productExists.quantity += 1;
    }

    AsyncStorage.setItem("selectedsProduct", JSON.stringify(productsSelecteds));
    setSelectedsProduct(productsSelecteds);
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
      handleAddQuantity,
      handleRemoveQuantity,
    };
  }, [
    products,
    getProducts,
    handleAddProduct,
    handleLoadProduct,
    selectedsProduct,
    handleRemoveProduct,
    handleAddQuantity,
    handleRemoveQuantity,
  ]);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export const useProduct = () => {
  const context = useContext(ProductContext);
  return context;
};
