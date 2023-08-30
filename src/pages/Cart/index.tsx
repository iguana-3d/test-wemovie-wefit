import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NothingHerePersonSVG from '../../assets/svgs/NothingHerePersonSVG';
import Button from '../../components/Button';
import { CartContainer } from './styles';
import CartContext from '../../context/CartContext';
import TrashSVG from '../../assets/svgs/TrashSVG';
import IncrementDecrementInput from '../../components/IncrementDecrementInput';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { productsCart, setProductsCart } = useContext(CartContext);

  const handleTotalValue = () => {
    const totalPrice = productsCart
      .map((product) => product.price * product.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return totalPrice.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleInputCountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: string
  ) => {
    const productIndex = productsCart.findIndex(
      (index) => index.id === parseInt(productId)
    );

    const newProducts = [...productsCart];
    newProducts[productIndex] = {
      ...productsCart[productIndex],
      quantity: parseInt(event.target.value),
    };

    setProductsCart(newProducts);
  };

  const handleInputIncrement = (idEntity: string) => {
    const productIndex = productsCart.findIndex(
      (index) => index.id === parseInt(idEntity)
    );

    const newProducts = [...productsCart];
    newProducts[productIndex] = {
      ...productsCart[productIndex],
      quantity: productsCart[productIndex].quantity + 1,
    };

    setProductsCart(newProducts);
  };

  const handleInputDecrement = (idEntity: string) => {
    const productIndex = productsCart.findIndex(
      (index) => index.id === parseInt(idEntity)
    );

    const newProducts = [...productsCart];
    newProducts[productIndex] = {
      ...productsCart[productIndex],
      quantity: productsCart[productIndex].quantity - 1,
    };

    setProductsCart(newProducts);
  };

  const handleRemoveProduct = (idEntity: number) => {
    setProductsCart(
      productsCart.filter((productFilter) => productFilter.id !== idEntity)
    );
  };

  return (
    <CartContainer>
      <div className="content">
        {productsCart.length ? (
          <React.Fragment>
            <div className="cart-box">
              <table width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <td className="first-td">
                      <span className="header-cart-title">Produto</span>
                    </td>
                    <td className="qtd-column">
                      <span className="header-cart-title">QTD</span>
                    </td>
                    <td>
                      <span className="header-cart-title">SubTotal</span>
                    </td>
                  </tr>
                </thead>
                {productsCart.map((productCart) => {
                  return (
                    <tbody key={productCart.id}>
                      <tr>
                        <td className="padding-bottom padding-top">
                          <div className="td-flex margin-right">
                            <img
                              className="product-image"
                              src={productCart.image}
                              alt={productCart.title}
                            />
                            <div className="product-texts">
                              <span>{productCart.title}</span>
                              <span>
                                {productCart.price.toLocaleString('pt-br', {
                                  style: 'currency',
                                  currency: 'BRL',
                                })}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="padding-bottom padding-top">
                          <div className="product-quantity td-flex">
                            <IncrementDecrementInput
                              maxFieldLength={3}
                              inputWidth="6.2rem"
                              idEntity={productCart.id.toString()}
                              inputValue={productCart.quantity.toString()}
                              onChangeInputValue={handleInputCountChange}
                              handleDecrement={handleInputDecrement}
                              handleIncrement={handleInputIncrement}
                            />
                          </div>
                        </td>
                        <td className="padding-bottom padding-top">
                          <div className="td-flex">
                            <span className="product-sub-total">
                              {(
                                productCart.price * productCart.quantity
                              ).toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL',
                              })}
                            </span>
                            <div className="icon-box">
                              <TrashSVG
                                onClick={() =>
                                  handleRemoveProduct(productCart.id)
                                }
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
              <span className="divider-desk" />
              <div className="buy-products-box">
                <Button
                  buttonText="Finalizar Pedido"
                  buttonSize={235}
                  onClick={() => {
                    setProductsCart([]);
                    navigate('/compra-realizada');
                  }}
                />
                <div className="total-price">
                  <span>Total</span>
                  <span>{handleTotalValue()}</span>
                </div>
              </div>
            </div>
            <div className="cart-box-mobile">
              {productsCart.map((productCart) => {
                return (
                  <div key={productCart.id} className="cart-box-item-mobile">
                    <img
                      className="product-image-mobile"
                      src={productCart.image}
                      alt={productCart.title}
                    />
                    <div className="product-texts-mobile">
                      <div className="product-title-value-mobile">
                        <span>{productCart.title}</span>
                        <span>
                          {productCart.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                        <div className="icon-box-mobile">
                          <TrashSVG
                            onClick={() => handleRemoveProduct(productCart.id)}
                          />
                        </div>
                      </div>
                      <div className="sub-total-group-mobile">
                        <IncrementDecrementInput
                          maxFieldLength={3}
                          inputWidth="6.2rem"
                          idEntity={productCart.id.toString()}
                          inputValue={productCart.quantity.toString()}
                          onChangeInputValue={handleInputCountChange}
                          handleDecrement={handleInputDecrement}
                          handleIncrement={handleInputIncrement}
                        />
                        <div className="sub-total-box">
                          <span>SubTotal</span>
                          <span>
                            {(
                              productCart.price * productCart.quantity
                            ).toLocaleString('pt-br', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <span className="divider" />
              <div className="total-values-mobile">
                <span>total</span>
                <span>{handleTotalValue()}</span>
              </div>
              <Button
                className="button-buy-mobile"
                buttonText="Finalizar Pedido"
                buttonSize={235}
                onClick={() => {
                  setProductsCart([]);
                  navigate('/compra-realizada');
                }}
              />
            </div>
          </React.Fragment>
        ) : (
          <div className="nothing-here-box">
            <h3>Parece que não há nada por aqui :(</h3>
            <NothingHerePersonSVG className="nothing-here-svg" />
            <Button
              buttonSize={180}
              buttonText="Voltar"
              className="nothing-here-button"
              onClick={() => {
                navigate('/');
              }}
            />
          </div>
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
