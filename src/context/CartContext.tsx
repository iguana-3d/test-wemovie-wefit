import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { IProduct } from '../services/products.types';

interface IProps {
  children: React.ReactNode;
}

export interface IProductCart extends IProduct {
  quantity: number;
}

interface ICartContext {
  productsCart: IProductCart[];
  setProductsCart: Dispatch<SetStateAction<IProductCart[]>>;
  handleAddProduct: (product: IProduct) => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider: React.FC<IProps> = ({ children }) => {
  const [productsCart, setProductsCart] = useState<IProductCart[]>([]);

  const handleAddProduct = (product: IProduct) => {
    const currentProductCart = productsCart.find(
      (productFind) => productFind.id === product.id
    );

    const newProduct: IProductCart = currentProductCart?.id
      ? { ...currentProductCart, quantity: currentProductCart.quantity + 1 }
      : { ...product, quantity: 1 };

    if (productsCart.length) {
      const productIndex = productsCart.findIndex(
        (index) => index.id === product.id
      );

      if (productIndex >= 0) {
        setProductsCart((prev) => {
          const newValue = prev.map((obj) => {
            if (obj.id === product.id) {
              return { ...obj, quantity: obj.quantity + 1 };
            }

            return obj;
          });

          return newValue;
        });
      } else {
        setProductsCart((prev) => [...prev, newProduct]);
      }
    } else {
      setProductsCart((prev) => [...prev, newProduct]);
    }
  };

  return (
    <CartContext.Provider
      value={{ productsCart, setProductsCart, handleAddProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
