import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from '../../ReviewCard/ReviewCard';
import { reviewsData } from '../../../data';
import { SwiperNavButtons } from '../SwiperNavBtn/SwiperNavBtn';

export const ReviewsSliderTablet = () => {
  return (
    <Swiper loop={true} spaceBetween={30} slidesPerView={2} className="mySwiper">
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
