import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
}

html {
   //Falar com equipe técnica, caso aprovado sobre medias e como a equipe trabalha
   box-sizing: border-box;
   font-size: 62.5%; // 1 Rem === 10px
   scroll-behavior: smooth;
   /* @media ${(props) => props.theme.medias.laptopLarge} {//1440px
      font-size: 56.25%;//9px = 9/16 * 100
   }
   @media ${(props) => props.theme.medias.tablet} {//768px 
      font-size: 50%;//8px = 8/16 * 100
   }
   @media ${(props) => props.theme.medias.mobile} {//600px
      font-size: 43.75%;//7px = 7/16 * 100
   } */
}

body {
   font-family: 'Open Sans', sans-serif;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   font-size: 1.6rem;
   line-height: normal;
}

h1 {
   color: ${(props) => props.theme.pallete.colors.others.purple[1]};
   line-height: normal;
}

h2 {
   color: ${(props) => props.theme.pallete.colors.others.purple[1]};
   line-height: normal;
}

h3 {
   font-size: 2rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.purple[1]};
   line-height: normal;
}

h4 {
   color: ${(props) => props.theme.pallete.colors.others.purple[1]};
   line-height: normal;

}

p {
   color: ${(props) => props.theme.pallete.colors.others.purple[1]};
   line-height: normal;
}

span {
   color: ${(props) => props.theme.pallete.colors.others.purple[1]};
   line-height: normal;
}
`;
