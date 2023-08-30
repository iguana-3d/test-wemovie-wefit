import React, { useCallback, useContext, useEffect, useState } from 'react';
import LoaderSVG from '../../assets/svgs/LoaderSVG';
import CardMovie from '../../components/CardMovie';
import CartContext from '../../context/CartContext';
import { listProductsService } from '../../services/products.service';
import { IListProductsResponse } from '../../services/products.types';
import { HomeContainer } from './styles';

const Home: React.FC = () => {
  const [dataProducts, setDataProducts] = useState<IListProductsResponse>();
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(true);
  const { productsCart, handleAddProduct } = useContext(CartContext);

  const getProducts = useCallback(async () => {
    setIsLoadingProducts(true);
    await listProductsService()
      .then((response) => {
        setIsLoadingProducts(false);
        setDataProducts(response);
      })
      .catch((_error) => {
        //set error in warning after
      });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <HomeContainer>
      <div className="content">
        {isLoadingProducts ? (
          <div className="loading-box">
            <LoaderSVG width="83px" height="83px" />
          </div>
        ) : (
          <div className="products-list">
            {dataProducts?.map((product) => {
              const productQuantity = productsCart.find(
                (productCart) => productCart.id === product.id
              );
              return (
                <CardMovie
                  key={product.id}
                  product={product}
                  quantityItems={
                    productQuantity?.id ? productQuantity.quantity : 0
                  }
                  handleAddProduct={() => handleAddProduct(product)}
                />
              );
            })}
          </div>
        )}
      </div>
    </HomeContainer>
  );
};

export default Home;
