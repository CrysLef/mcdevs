import { styled } from "styles/theme"


export const Footer = styled('footer', {
  backgroundColor: '$green9',
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  color: '$gray1',
  paddingTop: 40,
  px: 80,
  overflowX: 'hidden',
})

export const ListWrapper = styled('div', {
  display: 'flex',
  marginBottom: 20,
  gap: 100
})

export const Info = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  rowGap: 20
})

export const Social = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Foo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 10
})

export const Trade = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  fontSize: 12
})

export const Apps = styled('div', {
  display: 'flex',
  gap: 10
})