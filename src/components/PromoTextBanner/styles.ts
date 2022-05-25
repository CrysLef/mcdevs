import { styled } from 'styles/theme'


export const PromoWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  width: '35%',
  zIndex: 999,

  variants: {
    side: {
      bottom_left: {
        bottom: 40,
        left: 80
      },
      bottom_right: {
        bottom: 40,
        right: 80
      },
      top_left: {
        top: 40,
        left: 80
      },
      top_right: {
        top: 40,
        right: 80
      }
    }
  },

  defaultVariants: {
    side: 'bottom_right'
  }
})

export const Title = styled('h2', {
  color: '$green5',
  textAlign: 'center',
})
