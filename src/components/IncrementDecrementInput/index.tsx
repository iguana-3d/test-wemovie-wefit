import React from 'react';
import { IncrementDecrementInputContainer } from './styles';
import MinusCircleSVG from '../../assets/svgs/MinusCircleSVG';
import PlusCircleSVG from '../../assets/svgs/PlusCircleSVG';

interface IProps {
  idEntity: string;
  maxFieldLength: number;
  inputWidth?: string;
  handleIncrement: (idEntity: string) => void;
  handleDecrement: (idEntity: string) => void;
  inputValue: string;
  onChangeInputValue: (
    e: React.ChangeEvent<HTMLInputElement>,
    idEntity: string
  ) => void;
}

const IncrementDecrementInput: React.FC<IProps> = ({
  idEntity,
  maxFieldLength,
  inputWidth,
  handleDecrement,
  handleIncrement,
  inputValue,
  onChangeInputValue,
}) => {
  return (
    <IncrementDecrementInputContainer inputWidth={inputWidth}>
      <MinusCircleSVG
        onClick={() => {
          inputValue.length <= maxFieldLength &&
            parseInt(inputValue) > 1 &&
            handleDecrement(idEntity);
        }}
      />
      <input
        type="text"
        value={inputValue}
        maxLength={maxFieldLength}
        onChange={(event) => {
          const regexOnlyNumber = /^[0-9\b]+$/;

          if (
            regexOnlyNumber.test(event.target.value) &&
            parseInt(event.target.value) > 1 &&
            event.target.value.length <= maxFieldLength
          ) {
            onChangeInputValue(event, idEntity);
          }
        }}
      />
      <PlusCircleSVG
        onClick={() =>
          (parseInt(inputValue) + 1).toString().length <= maxFieldLength &&
          handleIncrement(idEntity)
        }
      />
    </IncrementDecrementInputContainer>
  );
};

export default IncrementDecrementInput;
