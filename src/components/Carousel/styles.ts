import { styled } from 'styles/theme'
import { Swiper } from "swiper/react";

export const CarouselSwiper = styled(Swiper, {
  width: '100%',

  '& .swiper-pagination-bullet-active': {
    background: '$text'
  }
})

export const Slide = styled('div',{
  width: '100%',
  maxHeight: 780,
})

export const Img = styled('img',{
  width: '100%',
  height: 780,
  objectFit: 'cover',
  aspectRatio: 'auto',
})