import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { responsive } from '../carousel/config';
import { CardReview } from './CardReview';

export const CarouselCards = (props) => {
  const { dataCards } = props;
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={10000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {dataCards.map((card) => (
        <CardReview key={card.id} dataCard={card} />
      ))}
    </Carousel>
  );
};
