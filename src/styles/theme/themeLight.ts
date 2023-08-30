import { lighten } from 'polished';
import baseTheme from './baseTheme';
//TYPES
import { IShadowOptions, ICustomShadowOptions } from './theme.types';
//Name color identify in: https://www.color-name.com/hex

const brandPrimary = {
  yellow: {
    1: '#FFF9DE',
    2: '#FFED9C',
    3: '#FFE054',
    4: '#FFD100',
    5: '#FFC148',
    6: '#FFA800',
    7: '#FFC700',
    8: '#FFC727',
    9: '#D88100',
    10: '#FFB72C',
  },
  blue: {
    1: '#8AB9FF',
    2: '#009EDD',
    3: '#1C61CA',
    4: '#003D9A',
    5: '#1E90FF',
  },
  purple: {
    1: '#2F2E41',
    2: '#333333',
  },
  red: {
    1: '#D92B6A',
    2: '#E20051',
    3: '#E41A3E',
    4: '#DE0F34',
    5: '#B1003F',
    6: '#AA001E',
    7: '#C45300',
    8: '#FF2E00',
    9: '#D14B00',
  },
  brown: {
    1: '#57001F',
    2: '#4B330E',
  },
  pink: {
    1: '#FFADCB',
  },
  green: {
    1: '#039B00',
    2: '#219653',
  },
  gray: {
    1: '#999999', //FAFAFA
    2: '#D9D9D9', //D7D7D7D
    3: '#BABABB',
    4: '#A6A6A6',
    5: '#929292',
    6: '#808080',
    7: '#5B5B5B',
    8: '#353535',
    9: '#1C1B1F',
    10: '#3D3D3D',
    11: '#3F3F3F',
    12: '#0B0B0B',
    13: '#F2F2F2',
    14: '#919EAB',
    15: '#121212',
    16: '#EBEBEB',
  },
};

const primary = {
  main: brandPrimary.yellow[6],
};

const info = {
  main: brandPrimary.blue[2],
};

const success = {
  main: brandPrimary.green[2],
};

const warning = {
  main: brandPrimary.yellow[6],
};

const error = {
  main: brandPrimary.red[1],
};

const common = {
  black: '#000000',
  white: '#FFFFFF',
};

const text = {
  primary: common.black,
  secondary: brandPrimary.gray[1],
  disabled: 'rgba(91, 91, 91, 0.8)',
};

const background = {
  paper: brandPrimary.gray[1],
  default: brandPrimary.purple[1],
  neutral: common.white,
};

//***********************************************
// GRADIENTS
//***********************************************

const gradients = {
  gradient01: `linear-gradient(86.46deg, ${brandPrimary.yellow[7]} 0%, ${brandPrimary.yellow[6]} 65.35%)`,
};

//***********************************************
// COLORS
//***********************************************

const colors = {
  common: common,
  primary: primary,
  error: error,
  warning: warning,
  info: info,
  success: success,
  others: brandPrimary,
  text: text,
  backgrounds: background,
};

//***********************************************
// SHADOWS
//***********************************************

const createShadows = (color: string): IShadowOptions => {
  const transparent = lighten(0.2, color);

  return {
    n1: `0 1px 2px 0 ${transparent}`,
    n4: `0 4px 8px 0 ${transparent}`,
    n8: `0 8px 16px 0 ${transparent}`,
    n12: `0 12px 24px -4px ${transparent}`,
    n16: `0 16px 32px -4px ${transparent}`,
    n20: `0 20px 40px -4px ${transparent}`,
    n24: `0 24px 48px 0 ${transparent}`,
    primary: `0 15px 30px 0 ${lighten(0.2, brandPrimary.gray[6])}`,
    info: `0 8px 16px 0 ${lighten(0.2, colors.info.main)}`,
    success: `0 8px 16px 0 ${lighten(0.2, colors.success.main)}`,
    warning: `0 8px 16px 0 ${lighten(0.2, colors.warning.main)}`,
    error: `0 8px 16px 0 ${lighten(0.2, colors.error.main)}`,
  };
};

const customShadows = (color: string): ICustomShadowOptions => {
  const transparent = lighten(0.2, color);

  return {
    n1: `0 1px 2px 0 ${transparent}`,
    n4: `0 4px 8px 0 ${transparent}`,
    n8: `0 8px 16px 0 ${transparent}`,
    n12: `0 12px 24px -4px ${transparent}`,
    n16: `0 16px 32px -4px ${transparent}`,
    n20: `0 20px 40px -4px ${transparent}`,
    n24: `0 24px 48px 0 ${transparent}`,
  };
};

//***********************************************
// THEME
//***********************************************

const theme = {
  components: {
    inputs: {},
    button: {
      backgrounds: {
        gradient: `linear-gradient(180deg, ${brandPrimary.yellow[4]}  0%, ${brandPrimary.yellow[6]} 100%)`,
      },
    },
  },
  pallete: {
    colors: colors,
    gradients: gradients,
    shadows: {
      default: createShadows(brandPrimary.gray[5]),
      custom: customShadows,
    },
  },
};

const themeLight = { ...baseTheme, ...theme };

export default themeLight;
