import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { ReviewCard } from '../../ReviewCard/ReviewCard';
import { reviewsData } from '../../../data';

export const ReviewsSliderDesktop = () => {
  return (
    <Swiper loop={true} spaceBetween={30} slidesPerView={3} className="mySwiper">
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
