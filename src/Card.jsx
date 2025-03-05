import "./card.css";

export function Card({ iconClass, title, buttonText }) {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-4">
      <div
        className="card text-center shadow-lg p-4"
        style={{ maxWidth: "400px", borderRadius: "15px" }}
      >
        <div className="d-flex justify-content-center">
          <div className="feature bg-primary text-white p-3 rounded-3">
            <i className={`${iconClass}`}></i>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary mt-2">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
