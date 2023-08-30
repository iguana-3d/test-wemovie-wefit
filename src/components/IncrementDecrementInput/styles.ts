import styled from 'styled-components';
import { darken } from 'polished';

interface IIncrementProps {
  inputWidth?: string;
}

export const IncrementDecrementInputContainer = styled.div<IIncrementProps>`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 1.1rem;
  user-select: none;

  svg {
    transition: all 0.2s;
    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }
  }

  input {
    padding: 1.6rem;
    border-radius: 4px;
    width: 100%;
    max-width: ${(props) => (props.inputWidth ? props.inputWidth : '100%')};
    line-height: 0;
    height: 2.6rem;
    border: none;
    border: 1px solid ${(props) => props.theme.pallete.colors.others.gray[2]};
    outline: 0;

    &:active,
    &:focus {
      border-color: ${(props) =>
        darken(0.2, props.theme.pallete.colors.others.gray[2])};
    }
  }
`;
