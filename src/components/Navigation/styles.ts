import { styled } from "styles/theme"
import { Button } from "../Button"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HiChevronDown } from 'react-icons/hi'
import { keyframes } from "@stitches/react";


const fadeIn = keyframes({
  '0%': {
    transform: 'scaleY(0.4)',
    transformOrigin: '100% 0%',
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 0%',
  }
})

export const NavigationList = styled(NavigationMenu.List, {
  display: 'flex',
  alignItems: 'center',
  gap: 30,
  color: '$text'
})

export const StyledButton = styled(Button, {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
})

export const Trigger = styled(NavigationMenu.Trigger, {
  color: '$text',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: 16,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 5,
})

export const SubMenu = styled(NavigationMenu.Sub, {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 50,
  backgroundColor: '$background',
  boxShadow: '0px 0px 12px -6px #000',
  borderRadius: 6,
  px: 60,
  py: 50,
  zIndex: 999,
  marginTop: 10,
  animation: `${fadeIn} 250ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,

  '&::before': {
    content: `''`,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 7.5px 10px 7.5px',
    borderColor: 'transparent transparent $background transparent',
    alignSelf: 'flex-start',
    position: 'absolute',
    top: '-2%'
  }
})

export const NavSubList = styled(NavigationList, {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: 680,
  gap: 75
})

export const ChevronIcon = styled(HiChevronDown, {
  '[data-state=open] &': { 
    transform: 'rotate(-180deg)' 
  },
  
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

export const CategoryIcon = styled('img', {
  size: 35
})

export const NavSubListItem = styled(NavigationMenu.Item, {
  width: '25%',
})