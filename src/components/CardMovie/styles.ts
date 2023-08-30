import styled from 'styled-components';

export const CardMovieContainer = styled.div`
  background: ${(props) => props.theme.pallete.colors.common.white};
  padding: 1rem 1.1rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 30.9rem;

  .card-image {
    width: 100%;
    max-width: 14.7rem;
    margin-bottom: 0.7rem;
  }

  .card-texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    margin-bottom: 0.8rem;

    & > :nth-child(1) {
      text-align: center;
      font-size: 1.2rem;
      font-weight: ${(props) => props.theme.typeFaceWeight.bold};
      color: ${(props) => props.theme.pallete.colors.others.purple[1]};
    }

    & > :nth-child(2) {
      text-align: center;
      font-size: 1.6rem;
      font-weight: ${(props) => props.theme.typeFaceWeight.bold};
      color: ${(props) => props.theme.pallete.colors.others.purple[1]};
    }
  }
`;
