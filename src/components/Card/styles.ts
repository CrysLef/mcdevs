import { css, styled } from "styles/theme";


export const Box = styled('div', {
  width: 580,
  height: 550,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow: '5px 5px 15px -6px #000',
  borderRadius: 8,
  my: 50
})

export const imageStyle = css({
  borderTopRadius: 8,
  objectFit: "cover"
})

export const Wrapper = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 40,
  height: '100%',
  borderBottomRadius: 8,
  py: 30
})

export const Content = styled('div', {
  width: '100%',
  textAlign: 'center',
  px: 50,

  '& p': {
    marginTop: 10
  }
})