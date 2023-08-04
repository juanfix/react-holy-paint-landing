export const Footer = () => {
  return (
    <footer className="text-lg-start">
      <div className="d-flex justify-content-center">
        <div className="py-0 mt-3" href="#">
          <img
            className="img-fluid me-2"
            alt="Holy Paint Logo"
            src="/assets/images/HolyPaintLogo.svg"
          />
          <img
            className="img-fluid ms-2"
            alt="Holy Paint Logo"
            src="/assets/images/HolyPaintText.svg"
          />
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mt-2">
        <p className="m-0">Marinette & Menominee Counties</p>
        <a href="tel:+19067920396">
          <p className="m-0">(906) 792-0396</p>
        </a>
        <p>Copyright © 2023 Holy Paint LLC</p>
      </div>
    </footer>
  );
};
