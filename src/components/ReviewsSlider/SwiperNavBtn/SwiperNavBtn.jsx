import React from 'react';
import { useSwiper } from 'swiper/react';
import { Container, Btn, SlideLeftIcon, SlideRightIcon } from './SwiperNavBtn.styled';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Container>
      <Btn type="button" onClick={() => swiper.slidePrev()}>
        <SlideLeftIcon />
      </Btn>
      <Btn type="button" onClick={() => swiper.slideNext()}>
        <SlideRightIcon />
      </Btn>
    </Container>
  );
};
