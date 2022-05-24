import type { NextPage } from 'next';
import * as S from 'styles/pages/index';

import { PageTitle } from 'components/Pagetitle';
import { Carousel } from 'components/Carousel';
import { Card } from 'components/Card';


const HomePage: NextPage = () => {
  return (
    <>
      <PageTitle>Home - McDev&apos;s</PageTitle>
      <Carousel />
      <S.Content>
        <Card image='https://via.placeholder.com/580x300' title='Gelado como um devsundae' description='Isso quer dizer que funcionou' to='' />
        <Card image='https://via.placeholder.com/580x300' title='Gelado como um devsundae' description='Isso quer dizer que funcionou' to='' />
        <Card image='https://via.placeholder.com/580x300' title='Gelado como um devsundae' description='Isso quer dizer que funcionou' to='' />
        <Card image='https://via.placeholder.com/580x300' title='Gelado como um devsundae' description='Isso quer dizer que funcionou' to='' />
      </S.Content>
    </>
  )
}

export default HomePage;