import { Link } from '../Link'
import * as S from './styles'
import categoriaCardapio from 'data/categoriaCardapio.json'

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Button } from 'components/Button';


export const Navigation = () => {
  return (

    <NavigationMenu.Root>
      <S.NavigationList>
        <NavigationMenu.Item>
          <S.Trigger>
            Cardápio
            <S.ChevronIcon aria-hidden />
          </S.Trigger>
          <NavigationMenu.Content>
            <S.SubMenu>
              <S.NavSubList>
                {categoriaCardapio.map(({icon, category, link}) => (
                  <S.NavSubListItem key={category}>
                    <S.StyledButton variant='transparent'>
                      <S.CategoryIcon src={icon} alt={category} />
                      <Link href={link}>
                        {category}
                      </Link>
                    </S.StyledButton>
                  </S.NavSubListItem>
                ))}
              </S.NavSubList>
              <Button>Ver mais</Button>
              <NavigationMenu.Viewport />
            </S.SubMenu>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href='#'>Promoções</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href='#'>Quem somos</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href='#'>Encontre seu McDev&apos;s</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href='#'>Trabalhe conosco</Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </S.NavigationList>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}