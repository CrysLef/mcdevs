import { Link } from 'components/Link';
import { Logo } from 'components/Logo';
import * as S from './styles';

export const Footer = () => {
  return(
    <S.Footer>
        <S.ListWrapper>
          <ul>
            <li>
              <Link href=''>Cardápio</Link>
            </li>
            <li>            
              <Link href=''>Quem somo</Link>
            </li>
            <li>            
              <Link href=''>Promoções</Link>
            </li>
            <li>            
              <Link href=''>Trabalhe conosco</Link>
            </li>
            <li>            
              <Link href=''>Encontre seu McDev&apos;s</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href=''>Contato</Link>
            </li>
            <li>
              <Link href=''>Contato</Link>
            </li>
          </ul>
        </S.ListWrapper>
        <S.Info>
          <S.Social>
            <S.Apps>
              <img src="https://via.placeholder.com/35" alt="" />
              <img src="https://via.placeholder.com/35" alt="" />
              <img src="https://via.placeholder.com/35" alt="" />
              <img src="https://via.placeholder.com/35" alt="" />
            </S.Apps>
            <S.Apps>
              <img src="https://via.placeholder.com/115x40" alt="" />
              <img src="https://via.placeholder.com/115x40" alt="" />
            </S.Apps>
          </S.Social>
          <S.Social>
            <S.Foo>
              <p>Privacidade</p>
              <p>Termos e condições</p>
            </S.Foo>
            <S.Trade>
              <Logo />
              © McDev&apos;s 2022
            </S.Trade>
          </S.Social>
        </S.Info>
      </S.Footer>    
  )
}