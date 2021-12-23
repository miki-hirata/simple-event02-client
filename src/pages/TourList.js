import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Loading, Pagination, TourList } from "../components";
import { getTours } from "../api.js";

export function TourListPage() {
  const [tours, setTours] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const perPage = 5;
  const page = +query.get("page") || 1;

  useEffect(() => {
    getTours({
      limit: perPage,
      offset: (page - 1) * perPage,
    }).then((data) => {
      setTours(data);
    });
  }, [page]);

  return (
    <>
      <Breadcrumb
        links={[
          { href: "/", content: "トップページ" },
          { href: "/tours", content: "ツアー一覧", active: true },
        ]}
      />
      {tours == null ? (
        <Loading />
      ) : (
        <section className="tour_section">
          {tours.rows.map((tour) => {
            return <TourList key={tour.id} tour={tour} />;
          })}
          <Pagination
            path="/tours"
            page={page}
            perPage={perPage}
            count={tours?.count}
          />
        </section>
      )}
    </>
  );
}
