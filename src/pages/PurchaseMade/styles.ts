import styled from 'styled-components';

export const PurchaseMadeContainer = styled.div`
  ${(props) => props.theme.mixins.containerGridDefault};
  background: ${(props) => props.theme.pallete.colors.backgrounds.default};
  min-height: 100vh;
  padding-top: 7.4rem;
  padding-bottom: 7.4rem;

  .content {
    grid-column: center-start / center-end;
    margin-top: 2.4rem;
    border-radius: 4px;
    background: ${(props) => props.theme.pallete.colors.common.white};
    padding: 6.4rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: center;
    height: min-content;

    @media ${(props) => props.theme.medias.mobile} {
      padding-left: 0;
      padding-right: 0;
      margin-top: 0;
    }

    h3 {
      @media ${(props) => props.theme.medias.mobile} {
        padding: 0 6.4rem;
      }
    }

    .successful-button {
      @media ${(props) => props.theme.medias.mobile} {
        padding: 0 6.4rem;
      }
    }

    .successful-svg {
      width: 100%;
      max-width: 34.3rem;
    }
  }
`;
