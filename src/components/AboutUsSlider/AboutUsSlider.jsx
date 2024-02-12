import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { aboutUsCardData } from '../../data';
import { AboutUsCard } from '../AboutUsCard/AboutUsCard';
import { Pagination } from 'swiper/modules';

export const AboutUsSlider = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      style={{
        paddingBottom: '44px',
        '--swiper-pagination-color': '#222',
        '--swiper-pagination-bullet-inactive-color': '#222',
        '--swiper-pagination-bullet-inactive-opacity': '0.25',
        '--swiper-pagination-bullet-size': '8px',
        '--swiper-pagination-bottom': '0px',
      }}
    >
      {aboutUsCardData.map(data => {
        return (
          <SwiperSlide key={data.title}>
            <AboutUsCard title={data.title} text={data.description} color={data.color} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
