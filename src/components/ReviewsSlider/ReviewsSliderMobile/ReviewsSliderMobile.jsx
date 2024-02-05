import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css';
import { ReviewCard } from '../../ReviewCard/ReviewCard';
import { reviewsData } from '../../../data';

export const ReviewsSliderMobile = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
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
      {reviewsData.map(data => {
        return (
          <SwiperSlide key={data.author}>
            <ReviewCard author={data.author} text={data.text} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
