import { Button } from 'components/Button';
import { Link } from 'components/Link';
import Image from 'next/image';
import * as S from './styles';

interface CardProps { 
  image: string;
  title: string;
  description: string;
  to: string;
}

export const Card = ({ image, title, description, to }: CardProps) => {
  return (
    <S.Box>
      <figure style={{ height: 300 }}>
        <Image className={S.imageStyle()} src={image} alt={title} width={580} height={300} />
      </figure>
      <S.Wrapper>
        <S.Content>
          <h2>{title}</h2>
          <p>{description}</p>
        </S.Content>
        <Link href={to}>
          <Button>Saiba mais</Button>
        </Link>
      </S.Wrapper>
    </S.Box>
  )
}