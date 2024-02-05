import {
  ReviewsSliderMobile,
  ReviewsSliderTablet,
  ReviewsSliderDesktop,
} from '../../components/ReviewsSlider';
import { Title, Container } from './Reviews.styled';
import { useMediaQuery } from 'react-responsive';

export const Reviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <section>
      <Container>
        <Title>Recenzje</Title>
        {isMobile && <ReviewsSliderMobile />}
        {isTablet && <ReviewsSliderTablet />}
        {isDesktop && <ReviewsSliderDesktop />}
      </Container>
    </section>
  );
};
