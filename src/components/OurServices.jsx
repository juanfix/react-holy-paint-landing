import { dataOurServices } from '../data/ourServices';
import { CardService } from './';

export const OurServices = () => {
  const { data } = dataOurServices;

  return (
    <section>
      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <h1>Our Services</h1>
          <h3>What can Holy Paint do for you?</h3>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        {data.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
