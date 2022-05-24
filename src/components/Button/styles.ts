import { styled } from "styles/theme";

export const Botao = styled('button',{
  color: '$text',
  border: 'none',
  px: 50,
  py: 15,
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: '$hover'
  },

  variants: {
    variant: {
      primary: { 
        backgroundColor: '$container', 
      },
      transparent: { 
        backgroundColor: 'transparent',
        px: 0,
        py: 0,

        '&:hover': {
          backgroundColor: 'transparent',
          color: '$green9'
        },
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})