import { styled } from "styles/theme";


export const Box = styled('div', {
  maxWidth: 580,
  maxHeight: 742,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 20,
  border: '1px solid $gray6',
  paddingBottom: 35,
  borderRadius: 8,
  boxShadow: '5px 5px 15px -6px #000',
  my: 50
})