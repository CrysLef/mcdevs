import type { NextPage } from 'next';
import * as S from 'styles/pages/index';

import { PageTitle } from 'components/Pagetitle';
import { Carousel } from 'components/Carousel';
import { Card } from 'components/Card';

import cards from 'data/cards.json';

const HomePage: NextPage = () => {
  return (
    <>
      <PageTitle>Home - McDev&apos;s</PageTitle>
      <Carousel />
      <S.Content>
        {cards.map(({ id, image, title, description, link}) => (
          <Card key={id} image={image} title={title} description={description} to={link} />
        ))}
      </S.Content>
    </>
  )
}

export default HomePage;