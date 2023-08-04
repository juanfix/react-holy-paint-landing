import {
  MainTitle,
  OurReviews,
  OurServices,
  OurStory,
  QuoteForm,
} from '../components';

export const MainPage = () => {
  return (
    <section className="container-fluid">
      <MainTitle />
      <OurServices />
      <OurReviews />
      <OurStory />
      <QuoteForm />
    </section>
  );
};
