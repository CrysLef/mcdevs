import { Autoplay, Pagination, Navigation } from "swiper";
import { CarouselSwiper, Slide, Img} from "./styles";
import { PromoTextBanner } from "components/PromoTextBanner";
import { SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";


export const Carousel = () => {

  return (
    <CarouselSwiper
        centeredSlides
        loop
        grabCursor
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Slide>
            <PromoTextBanner title='Venha provar nossas novas sobremesas.'  side='top_left'/>
            <Img src='/cardapio/dessert.jpg' alt='' />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <PromoTextBanner title='Tá esperando o que para provar nosso McDev&apos;s?' />
            <Img src='/cardapio/hamburguer.jpg' alt='' />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <PromoTextBanner title='Temos opções para você que quer levar uma vida mais saudável, pratos veganos e muito mais.' side='bottom_left' />
            <Img src='/cardapio/salad.jpg' alt='' />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <PromoTextBanner title='Somente HOJE desconto de 80% nas pizzas de Lasanha de beringela com catupiry, ainda leve grátis um Dollynho 2L.'  side='bottom_left' />
            <Img src='/cardapio/pizza.jpg' alt='' />
          </Slide>
        </SwiperSlide>
      </CarouselSwiper>
  )
}