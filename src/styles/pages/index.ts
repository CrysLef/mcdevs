import { styled } from "../theme";

export const Title = styled('h1',{
  color: '$text'
})

export const Content = styled('main',{
  display: 'flex',
  overflowX: 'hidden',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 100,
  my: 100
})

