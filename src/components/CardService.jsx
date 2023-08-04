export const CardService = (props) => {
  const { service } = props;
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 service-card-container">
      <div className="card border border-black border-2 h-100 service-card">
        <div className="card-body text-center">
          <img
            className="card-img-top w-auto mb-3"
            src={service.img_url}
            alt={service.title}
          />
          <h4 className="card-title">{service.title}</h4>
          <p className="card-text">{service.description}</p>
        </div>
      </div>
    </div>
  );
};
