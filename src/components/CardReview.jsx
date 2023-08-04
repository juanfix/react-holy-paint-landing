export const CardReview = (props) => {
  const { dataCard } = props;
  const { author, description, img_url } = dataCard;
  return (
    <div className="card mx-2 h-100">
      <img className="card-img-top" src={img_url} alt={author} />
      <div className="card-body">
        <div className="d-flex flex-column justify-content-center">
          <q className="text-center">{description}</q>
          <p className="text-center">- {author}</p>
        </div>
      </div>
    </div>
  );
};
