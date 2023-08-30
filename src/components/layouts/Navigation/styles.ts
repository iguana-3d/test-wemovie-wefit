import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 7.4rem;
  ${(props) => props.theme.mixins.containerGridDefault};

  .content {
    grid-column: center-start / center-end;
    padding: 1.8rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;

    @media ${(props) => props.theme.medias.mobile} {
      grid-column: full-start / full-end;
    }

    .logo-box {
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }

    .cart {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }

    .cart-texts {
      display: flex;
      flex-direction: column;

      & > :nth-child(1) {
        color: ${(props) => props.theme.pallete.colors.common.white};
        font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
        font-size: 1.4rem;

        @media ${(props) => props.theme.medias.mobile} {
          display: none;
        }
      }

      & > :nth-child(2) {
        color: ${(props) => props.theme.pallete.colors.text.secondary};
        font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
        font-size: 1.2rem;
        text-align: right;
      }
    }

    .icon-box {
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
