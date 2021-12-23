import { Link } from "react-router-dom";

export function PlaceList({ place }) {
  return (    
    <Link
      key={place.id}
      className="card"
      to={`/places/${place.id}`}
    >
      <div className="card_head">
        <div className="num">
          <span>No.</span>
          <span>{place.id}</span>
        </div>
        <div className="title">
            <h2><span>{place.name}</span></h2>
        </div>
      </div>
    </Link>
  );
}

export function PlaceDetail({ place }) {
  return (    
    <div className="card">
      <div className="card_head">
        <div className="num">
          <span>No.</span>
          <span>{place.id}</span>
        </div>
        <div className="title">
            <h2><span>{place.name}</span></h2>
        </div>
      </div>
    </div>
  );
}
