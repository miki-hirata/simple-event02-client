import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getTour } from "../api.js";
import { Breadcrumb, Loading, Pagination, Comment, TourDetail } from "../components";

export function TourDetailPage() {
  const [tour, setTour] = useState(null);

  const params = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const perPage = 5;
  const page = +query.get("page") || 1;

  useEffect(() => {
    getTour(params.tourId).then((data) => {
      setTour(data);
    });
  }, [params.tourId]);


  return (
    <>
      <Breadcrumb
        links={[
          { href: "/", content: "トップページ" },
          { href: "/tours", content: "ツアー一覧" },
          {
            href: `/tours/${params.tourId}`,
            content: tour && `${tour.name} `,
            active: true,
          },
        ]}
      />
      <div className="tour_section">
        {tour == null ? (
          <Loading />
        ) : (
          <TourDetail
            tour={tour}
            page={page}
            perPage={perPage}
          />
        )}
        {/* <Pagination
          path={`/tours/${tour.id}`}
          page={page}
          perPage={perPage}
          count={comments.count}
        /> */}
      </div>
    </>
  );
}
