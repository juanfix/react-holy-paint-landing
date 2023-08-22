import { useState } from 'react';
import swAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useForm } from '../hooks/useForm';
import { LoadingSpinner } from './LoadingSpinner';
import { useAxiosBlogs } from '../hooks/useAxiosMail';

const MySwal = withReactContent(swAlert);

const quoteFormFields = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export const QuoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, phone, email, message, onInputChange, onResetForm } =
    useForm(quoteFormFields);

  const { startCreatingAndSendingMail } = useAxiosBlogs();

  const onRequestQuoteSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    const response = startCreatingAndSendingMail(name, phone, email, message);
    response
      .then((data) => {
        setIsLoading(false);
        if (typeof data === 'undefined') {
          MySwal.fire({
            icon: 'error',
            title: <p>Error</p>,
            text: 'The message has not been sent, try again later.',
          });
        } else {
          onResetForm();
          MySwal.fire({
            icon: 'success',
            title: <p>Success</p>,
            text: 'The message has been sent successfully, We will contact you as soon as we review your message.',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        MySwal.fire({
          icon: 'error',
          title: <p>Error</p>,
          text: 'The message has not been sent, try again later.',
        });
      });
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
              required
            ></textarea>
          </div>
          <div className="text-center">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <button type="submit" className="btn btn-lg btn-light mb-3">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
