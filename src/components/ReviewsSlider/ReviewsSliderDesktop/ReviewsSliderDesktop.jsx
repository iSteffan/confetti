import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviewsData } from '../../../data';
import { ReviewCard } from '../../ReviewCard/ReviewCard';

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
