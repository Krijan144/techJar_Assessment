import { createStitches } from '@stitches/react';

export const { styled, getCssText, keyframes, globalCss } = createStitches({
  media: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 375px)',
    md: '(max-width: 1080px)',
    md2: '(min-width: 1080px)',
    lg: '(min-width: 1200px)',
  },
  theme: {
    colors: {
      primary: '#1F4782',
      secondary: '#eb501e',
      gray: '#c7c7c7',
      white: '#ffffff',
    },
    fontSizes: {
      small: '14px',
      normal: '1.1rem',
      large: '1.3rem',
    },
  },
});
const injectGlobalStyles = globalCss({});

injectGlobalStyles();
