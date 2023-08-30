import styled from 'styled-components';

export const CartContainer = styled.div`
  ${(props) => props.theme.mixins.containerGridDefault};
  background: ${(props) => props.theme.pallete.colors.backgrounds.default};
  min-height: 100vh;
  padding-top: 7.4rem;
  padding-bottom: 7.4rem;

  .content {
    grid-column: center-start / center-end;
    margin-top: 2.4rem;

    @media ${(props) => props.theme.medias.tablet} {
      margin-top: 0;
    }

    .divider-desk {
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.pallete.colors.others.gray[1]};
    }

    .cart-box {
      border-radius: 4px;
      background: ${(props) => props.theme.pallete.colors.common.white};
      padding: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 2.1rem;
      height: min-content;

      @media ${(props) => props.theme.medias.tablet} {
        display: none;
      }
    }

    .cart-box-mobile {
      display: none;
      border-radius: 4px;
      background: ${(props) => props.theme.pallete.colors.common.white};
      padding: 2.4rem;
      flex-direction: column;
      gap: 1.6rem;
      height: calc(100vh - 90px);

      @media ${(props) => props.theme.medias.tablet} {
        display: flex;
      }

      .cart-box-item-mobile {
        display: flex;
        align-items: flex-start;
        gap: 1.6rem;
        width: 100%;
      }

      .product-image-mobile {
        width: 100%;
        max-width: 6.4rem;
      }

      .product-texts-mobile {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
      }

      .product-title-value-mobile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.6rem;
        width: 100%;

        & > :nth-child(1) {
          color: ${(props) => props.theme.pallete.colors.others.purple[1]};
          font-size: 1.4rem;
          font-weight: ${(props) => props.theme.typeFaceWeight.bold};
        }

        & > :nth-child(2) {
          margin-left: auto;
          color: ${(props) => props.theme.pallete.colors.others.purple[1]};
          font-size: 1.6rem;
          font-weight: ${(props) => props.theme.typeFaceWeight.bold};
        }
      }

      .icon-box-mobile {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        cursor: pointer;

        &:active {
          transform: scale(0.95);
        }
      }

      .sub-total-group-mobile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.6rem;
        flex-wrap: wrap;
      }

      .sub-total-box {
        display: flex;
        flex-direction: column;
        margin-left: auto;

        & > :nth-child(1) {
          color: ${(props) => props.theme.pallete.colors.others.gray[1]};
          text-align: center;
          text-transform: uppercase;
          font-size: 1.2rem;
          font-weight: ${(props) => props.theme.typeFaceWeight.bold};
        }

        & > :nth-child(2) {
          color: ${(props) => props.theme.pallete.colors.others.purple[1]};
          font-size: 1.6rem;
          font-weight: ${(props) => props.theme.typeFaceWeight.bold};
        }
      }

      .divider {
        width: 100%;
        height: 1px;
        background: ${(props) => props.theme.pallete.colors.others.gray[1]};
        margin-top: auto;
      }

      .total-values-mobile {
        display: flex;
        align-items: center;
        margin: 0 auto;
        width: max-content;
        gap: 1.6rem;

        & > :nth-child(1) {
          color: ${(props) => props.theme.pallete.colors.others.gray[1]};
          text-align: center;
          text-transform: uppercase;
          font-size: 1.4rem;
          font-weight: ${(props) => props.theme.typeFaceWeight.bold};
        }

        & > :nth-child(2) {
          color: ${(props) => props.theme.pallete.colors.others.purple[1]};
          font-size: 2.4rem;
          font-weight: ${(props) => props.theme.typeFaceWeight.bold};
        }
      }

      .button-buy-mobile {
        margin: 0 auto;
      }
    }

    table {
      border-collapse: collapse;
    }

    .padding-bottom {
      padding-bottom: 2.1rem;
    }

    .padding-top {
      padding-top: 2.1rem;
    }

    .margin-right {
      margin-right: 5.2rem;
    }

    .border-bottom {
      border-bottom: 1px solid
        ${(props) => props.theme.pallete.colors.others.gray[1]};
    }

    .qtd-column {
      width: 17.1rem;
    }

    .first-td {
      width: 44.6rem;
    }

    .header-cart {
      display: flex;
      align-items: center;

      & > :nth-child(1) {
        width: 16.7rem;
      }

      & > :nth-child(2) {
        width: 17.1rem;
      }

      & > :nth-child(3) {
      }
    }

    .td-flex {
      display: flex;
      align-items: center;
    }

    .header-cart-title {
      color: ${(props) => props.theme.pallete.colors.others.gray[1]};
      text-align: center;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: ${(props) => props.theme.typeFaceWeight.bold};
    }

    .product-image {
      width: 100%;
      max-width: 8.9rem;
    }

    .product-texts {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-left: 5.2rem;

      & > :nth-child(1) {
        color: ${(props) => props.theme.pallete.colors.others.purple[1]};
        font-size: 1.4rem;
        font-weight: ${(props) => props.theme.typeFaceWeight.bold};
      }

      & > :nth-child(2) {
        color: ${(props) => props.theme.pallete.colors.others.purple[1]};
        font-size: 1.6rem;
        font-weight: ${(props) => props.theme.typeFaceWeight.bold};
      }
    }

    .product-quantity {
      width: 100%;
      min-width: max-content;
    }

    .product-sub-total {
      width: 100%;
      color: ${(props) => props.theme.pallete.colors.others.purple[1]};
      font-size: 1.6rem;
      font-weight: ${(props) => props.theme.typeFaceWeight.bold};
      user-select: none;
    }

    .icon-box {
      display: flex;
      align-items: center;
      transition: all 0.2s;
      margin-left: 5.2rem;
      cursor: pointer;

      &:active {
        transform: scale(0.95);
      }
    }

    .buy-products-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
    }

    .total-price {
      display: flex;
      align-items: center;

      & > :nth-child(1) {
        color: ${(props) => props.theme.pallete.colors.others.gray[1]};
        text-align: center;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: ${(props) => props.theme.typeFaceWeight.bold};
        width: 6.1rem;
      }

      & > :nth-child(2) {
        color: ${(props) => props.theme.pallete.colors.others.purple[1]};
        text-align: center;
        font-size: 2.4rem;
        font-weight: ${(props) => props.theme.typeFaceWeight.bold};
      }
    }

    .nothing-here-box {
      border-radius: 4px;
      background: ${(props) => props.theme.pallete.colors.common.white};
      padding: 6.4rem;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      align-items: center;
      height: min-content;

      h3 {
        @media ${(props) => props.theme.medias.mobile} {
          padding: 0 6.4rem;
        }
      }

      @media ${(props) => props.theme.medias.mobile} {
        padding-left: 0;
        padding-right: 0;
      }

      .nothing-here-button {
        @media ${(props) => props.theme.medias.mobile} {
          padding: 0 6.4rem;
        }
      }

      .nothing-here-svg {
        width: 100%;
        max-width: 44.8rem;
      }
    }
  }
`;
