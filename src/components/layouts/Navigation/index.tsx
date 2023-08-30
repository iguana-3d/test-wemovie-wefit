import React, { useContext } from 'react';
import { NavigationContainer } from './styles';
import CartSVG from '../../../assets/svgs/CartSVG';
import LogoSVG from '../../../assets/svgs/LogoSVG';
import CartContext from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { productsCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <NavigationContainer>
      <div className="content">
        <span className="logo-box" onClick={() => navigate('/')}>
          <LogoSVG />
        </span>
        <div className="cart">
          <div className="cart-texts">
            <span>Meu Carrinho</span>
            <span>{productsCart.length}&nbsp;itens</span>
          </div>
          <div className="icon-box" onClick={() => navigate('carrinho')}>
            <CartSVG />
          </div>
        </div>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
