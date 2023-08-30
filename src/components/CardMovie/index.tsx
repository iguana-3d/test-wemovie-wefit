import React from 'react';
import { IProduct } from '../../services/products.types';
import ButtonAddCart from '../Button';
import { CardMovieContainer } from './styles';
import CartSecondSVG from '../../assets/svgs/CartSecondSVG';

interface IProps {
  product: IProduct;
  handleAddProduct: () => void;
  quantityItems: number;
}

const CardMovie: React.FC<IProps> = ({
  product,
  handleAddProduct,
  quantityItems,
}) => {
  return (
    <CardMovieContainer>
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-texts">
        <span>{product.title}</span>
        <span>
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
      <ButtonAddCart
        isFullWidth
        onClick={handleAddProduct}
        quantityItems={quantityItems}
        isAddedItem={!!quantityItems}
        buttonText="Adicionar ao carrinho"
        icon={
          <React.Fragment>
            <span className="quantity">
              <CartSecondSVG width="13.6" height="13.6" />
              &nbsp;
              {quantityItems || 0}
            </span>
          </React.Fragment>
        }
      />
    </CardMovieContainer>
  );
};

export default CardMovie;
