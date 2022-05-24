import { createStitches } from "@stitches/react";
import { green, gray } from '@radix-ui/colors';

export const { getCssText, styled, globalCss, css } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...green,

      text: '$green11',
      container: '$green3',
      background: '$green1',
      hover: '$green4' 
    },
    fonts: {
      default: 'Noto Sans, sans-serif',
    }
  },
  utils: {
    mx: (value: any) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: any) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    size: (value: any) => ({
      width: value,
      height: value,
    })
  }
  
})