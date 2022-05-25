import { Autoplay, Pagination, Navigation } from "swiper";
import { CarouselSwiper, Slide } from "./styles";
import { PromoTextBanner } from "components/PromoTextBanner";
import { SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";


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
            <Image src='/cardapio/dessert.jpg' alt='' layout='fill' objectFit='cover' />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <PromoTextBanner title='Tá esperando o que para provar nosso McDev&apos;s?' />
            <Image src='/cardapio/hamburguer.jpg' alt='' layout='fill' objectFit='cover' />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <PromoTextBanner title='Temos opções para você que quer levar uma vida mais saudável, pratos veganos e muito mais.' side='bottom_left' />
            <Image src='/cardapio/salad.jpg' alt='' layout='fill' objectFit='cover' />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <PromoTextBanner title='Somente HOJE desconto de 80% nas pizzas de Lasanha de beringela com catupiry, ainda leve grátis um Dollynho 2L.'  side='bottom_left' />
            <Image src='/cardapio/pizza.jpg' alt='' layout='fill' objectFit='cover' />
          </Slide>
        </SwiperSlide>
      </CarouselSwiper>
  )
}