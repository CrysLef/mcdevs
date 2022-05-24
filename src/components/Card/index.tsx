import { Button } from 'components/Button';
import { Link } from 'components/Link';
import * as S from './styles';

interface CardProps { 
  image: string | undefined;
  title: string;
  description: string;
  to: string;
}

export const Card = ({ image, title, description, to }: CardProps) => {
  return (
    <S.Box>
      <img src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link href={to}>
        <Button>Saiba mais</Button>
      </Link>
    </S.Box>
  )
}