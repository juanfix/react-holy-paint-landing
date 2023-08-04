export const MainTitle = () => {
  const onSendQuoteRequest = () => {
    document.querySelector('.quote-form-section').focus();
  };
  return (
    <section className="row main-title">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="my-4">INTERIOR - EXTERIOR - CUSTOM JOBS</h1>
        <h3 className="my-4">Need an expert painter?</h3>
        <button
          className="btn btn-warning btn-lg my-4"
          onClick={onSendQuoteRequest}
        >
          Request a Quote
        </button>
      </div>
    </section>
  );
};
