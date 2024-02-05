import React from 'react';
import { useSwiper } from 'swiper/react';
import { Container, Btn, SlideLeftIcon, SlideRightIcon } from './SwiperNavBtn.styled';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Container>
      <Btn onClick={() => swiper.slidePrev()}>
        <SlideLeftIcon />
      </Btn>
      <Btn onClick={() => swiper.slideNext()}>
        <SlideRightIcon />
      </Btn>
    </Container>
  );
};
