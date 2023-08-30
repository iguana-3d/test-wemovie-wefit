import styled from 'styled-components';
import { pixelsToRemUnit } from '../../utils/sizesCalcs';
import { darken } from 'polished';

interface IButtonProps {
  buttonSize?: number;
  isFullWidth?: boolean;
  isAddedItem?: boolean;
}

export const ButtonContainer = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  background: ${(props) =>
    props.isAddedItem
      ? props.theme.pallete.colors.others.green[1]
      : props.theme.pallete.colors.others.blue[2]};
  min-height: 4rem;
  width: ${(props) =>
    props.isFullWidth
      ? '100%'
      : !!props.buttonSize
      ? pixelsToRemUnit(props.buttonSize)
      : 'max-content'};
  min-width: min-content;
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: none;
  transition: all 0.1s linear;
  position: relative;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.isAddedItem
        ? darken(0.05, props.theme.pallete.colors.others.green[1])
        : darken(0.05, props.theme.pallete.colors.others.blue[2])};
  }

  &:active {
    transform: scale(0.98);
  }

  .button-text {
    color: ${(props) => props.theme.pallete.colors.common.white};
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: ${(props) => props.theme.typeFaceWeight.bold};
  }
`;
