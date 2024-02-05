import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from '../../ReviewCard/ReviewCard';
import { reviewsData } from '../../../data';
import { SwiperNavButtons } from '../SwiperNavBtn/SwiperNavBtn';

export const ReviewsSliderTablet = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      slidesPerView={2}
      className="mySwiper"
      //   style={
      //     {
      //       paddingBottom: '44px',
      //       '--swiper-pagination-color': '#222',
      //       '--swiper-pagination-bullet-inactive-color': '#222',
      //       '--swiper-pagination-bullet-inactive-opacity': '0.25',
      //       '--swiper-pagination-bullet-size': '8px',
      //       '--swiper-pagination-bottom': '0px',
      //     }
      //   }
    >
      {reviewsData.map(data => {
        return (
          <SwiperSlide key={data.author}>
            <ReviewCard author={data.author} text={data.text} />
          </SwiperSlide>
        );
      })}
      <SwiperNavButtons />
    </Swiper>
  );
};
