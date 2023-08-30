import React, { HTMLAttributes } from 'react';
import { ButtonContainer } from './styles';
// import LoaderSVG from '../../assets/svgs/LoaderSVG';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  buttonSize?: number;
  buttonText: string;
  isFullWidth?: boolean;
  quantityItems?: number;
  isAddedItem?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
  buttonSize,
  buttonText,
  isFullWidth,
  quantityItems,
  isAddedItem,
  icon,
  ...props
}) => {
  return (
    <ButtonContainer
      buttonSize={buttonSize}
      isFullWidth={!!isFullWidth}
      isAddedItem={!!isAddedItem}
      {...props}
    >
      {icon}
      <span className="button-text">{buttonText}</span>
    </ButtonContainer>
  );
};

export default Button;
