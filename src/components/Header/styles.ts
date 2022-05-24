import { styled } from "styles/theme"
import { Button } from "../Button"

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 50,
  borderBottom: '1px solid $gray6',
  overflowX: 'hidden',
})

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 40,
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 30,
})

export const StyledButton = styled(Button, {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
})