import * as S from './styles'

import { GiSmartphone } from 'react-icons/gi'

import { Navigation } from '../Navigation'
import { Logo } from 'components/Logo'
import { Button } from '../Button'
import { Link } from '../Link'

export const Header = () => {
  return(
    <S.Header>
      <S.Box>
        <Logo />
        <Navigation />
      </S.Box>
      <S.Container>
        <S.StyledButton variant='transparent'>
          <GiSmartphone size={22} />
          <Link href=''>Baixe nosso app</Link>
        </S.StyledButton>
        <Button>Login</Button>
      </S.Container>
    </S.Header>
  )
}