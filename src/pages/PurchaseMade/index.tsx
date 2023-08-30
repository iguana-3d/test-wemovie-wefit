import React from 'react';
import { PurchaseMadeContainer } from './styles';
import SucessfulPersonSVG from '../../assets/svgs/SucessfulPersonSVG';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const PurchaseMade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PurchaseMadeContainer>
      <div className="content">
        <h3>Compra realizada com sucesso!</h3>
        <SucessfulPersonSVG className="successful-svg" />
        <Button
          className="successful-button"
          buttonSize={180}
          buttonText="Voltar"
          onClick={() => navigate('/')}
        />
      </div>
    </PurchaseMadeContainer>
  );
};

export default PurchaseMade;
