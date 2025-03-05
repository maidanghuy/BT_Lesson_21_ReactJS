import { Card } from "./Card.jsx";
export function CardGrid() {
  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-4">
            <Card
              iconClass="fa-solid fa-globe-americas"
              title="Americas"
              buttonText="Americas"
            />
          </div>
          <div className="col-md-4">
            <Card
              iconClass="fa-solid fa-globe-europe"
              title="Europe"
              buttonText="Europe"
            />
          </div>
          <div className="col-md-4">
            <Card
              iconClass="fa-solid fa-globe-africa"
              title="Africa"
              buttonText="Africa"
            />
          </div>
          <div className="col-md-4">
            <Card
              iconClass="fa-regular fa-star"
              title="Start"
              buttonText="Start"
            />
          </div>
          <div className="col-md-4">
            <Card
              iconClass="fa-regular fa-heart"
              title="Heart"
              buttonText="Heart"
            />
          </div>
          <div className="col-md-4">
            <Card
              iconClass="fa-regular fa-thumbs-up"
              title="Like"
              buttonText="Like"
            />
          </div>
        </div>
      </div>
    </>
  );
}
