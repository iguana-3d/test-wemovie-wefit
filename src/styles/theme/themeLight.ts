import { lighten } from 'polished';
import baseTheme from './baseTheme';
//TYPES
import { IShadowOptions, ICustomShadowOptions } from './theme.types';
//Name color identify in: https://www.color-name.com/hex

const brandPrimary = {
  yellow: {
    1: '#FFA800',
  },
  blue: {
    1: '#8AB9FF',
    2: '#009EDD',
  },
  purple: {
    1: '#2F2E41',
    2: '#333333',
  },
  red: {
    1: '#D92B6A',
  },
  green: {
    1: '#039B00',
  },
  gray: {
    1: '#999999',
    2: '#D9D9D9',
  },
};

const primary = {
  main: brandPrimary.yellow[1],
};

const info = {
  main: brandPrimary.blue[2],
};

const success = {
  main: brandPrimary.green[1],
};

const warning = {
  main: brandPrimary.yellow[1],
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
    primary: `0 15px 30px 0 ${lighten(0.2, brandPrimary.gray[1])}`,
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
  pallete: {
    colors: colors,
    shadows: {
      default: createShadows(brandPrimary.gray[1]),
      custom: customShadows,
    },
  },
};

const themeLight = { ...baseTheme, ...theme };

export default themeLight;
