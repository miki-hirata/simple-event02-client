import { Link } from "react-router-dom";

export function TourList({ tour }) {
  return (    
    <Link
      key={tour.id}
      className="card"
      to={`/tours/${tour.id}`}
    >
      <div className="card_head">
        <div className="num">
          <span>No.</span>
          <span>{tour.id}</span>
        </div>
        <div className="title">
            <h2><span>{tour.name}</span></h2>
        </div>
      </div>
    </Link>
  );
}


export function TourDetail({ tour }) {
  return (
    <div className="card">
      <div className="card_head">
        <div className="num">
          <span>No.</span>
          <span>{tour.id}</span>
        </div>
        <div className="title">
            <h2><span>{tour.name}</span></h2>
        </div>
      </div>
    </div>
  );
}
