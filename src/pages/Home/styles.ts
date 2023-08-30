import styled from 'styled-components';

export const HomeContainer = styled.div`
  ${(props) => props.theme.mixins.containerGridDefault};
  background: ${(props) => props.theme.pallete.colors.backgrounds.default};
  min-height: 100vh;
  padding-top: 7.4rem;
  padding-bottom: 7.4rem;

  .content {
    grid-column: center-start / center-end;
    margin-top: 2.4rem;

    @media ${(props) => props.theme.medias.mobile} {
      margin-top: 0;
    }

    .loading-box {
      position: relative;
      height: calc(100vh - 9.8rem);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .products-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
      justify-content: center;
      & > {
        flex: 0 1 auto;
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.pallete.colors.common.white};
      text-align: center;
      font-size: 1.2rem;
      font-weight: ${(props) => props.theme.typeFaceWeight.regular};
    }
  }
`;
