import React from 'react';
import { useSwiper } from 'swiper/react';
import { Container, Btn, SlideLeftIcon, SlideRightIcon } from './SwiperNavBtn.styled';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Container>
      <Btn type="button" onClick={() => swiper.slidePrev()} aria-label="Move to the previous slide">
        <SlideLeftIcon aria-label="Move to the previous slide icon" />
      </Btn>
      <Btn type="button" onClick={() => swiper.slideNext()} aria-label="Move to the next slide">
        <SlideRightIcon aria-label="Move to the next slide icon" />
      </Btn>
    </Container>
  );
};
