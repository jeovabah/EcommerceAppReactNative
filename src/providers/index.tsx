import { ProductProvider } from "../contexts/Product";

export interface ChildrenProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: ChildrenProps) => {
  return <ProductProvider>{children}</ProductProvider>;
};
