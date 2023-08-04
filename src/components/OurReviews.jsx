import { dataOurReviews } from '../data/ourReviews';
import { CarouselCards } from './CarouselCards';

export const OurReviews = () => {
  const { data } = dataOurReviews;
  return (
    <section className="row bg-custom pt-4">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <h1>Our Reviews</h1>
          <h3>Hear what our customers have to say</h3>
        </div>
      </div>
      <div className="mt-3 pb-5">
        <CarouselCards dataCards={data} />
      </div>
    </section>
  );
};
