import { useForm } from '../hooks/useForm';

const quoteFormFields = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export const QuoteForm = () => {
  const { name, phone, email, message, onInputChange } =
    useForm(quoteFormFields);

  const onRequestQuoteSubmit = (event) => {
    event.preventDefault();
    console.log('hola');
  };

  return (
    <section className="row bg-custom py-4 quote-form-section" tabIndex="0">
      <div className="d-flex flex-column align-items-center">
        <h1>Ready to Upgrade Your Home?</h1>
        <h3>Contact Us & We'll Be in Touch</h3>
        <form className="quote-request-form" onSubmit={onRequestQuoteSubmit}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control py-3"
              placeholder="Name *"
              name="name"
              autoComplete="off"
              value={name}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="tel"
              className="form-control py-3"
              placeholder="Phone *"
              name="phone"
              autoComplete="off"
              value={phone}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control py-3"
              placeholder="Email *"
              name="email"
              autoComplete="off"
              value={email}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group mb-2">
            <textarea
              type="text"
              className="form-control"
              placeholder="Message *"
              rows="7"
              name="message"
              value={message}
              onChange={onInputChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-light">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
