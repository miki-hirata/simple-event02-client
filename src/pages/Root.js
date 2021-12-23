import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents, getTours } from "../api.js";
import { Loading, EventList, TourList  } from "../components";

export function RootPage() {
  const [events, setEvents] = useState(null);
  const [tours, setTours] = useState(null);

  useEffect(() => {
    getEvents({ limit: 5 }).then((data) => {
      setEvents(data);
    });
  }, []);

  useEffect(() => {
    getTours({ limit: 5 }).then((data) => {
      setTours(data);
    });
  }, []);

  return (
    <>
      <section className="event_section">
        <div className="section_title">
          <h2><span>最新イベント（5件）</span></h2>
        </div>
        {events == null ? (
          <Loading />
        ) : (
          events.rows.map((event) => {
            return <EventList key={event.id} event={event} />;
          })
        )}
      </section>
      <section className="tour_section">
        <div className="section_title">
          <h2><span>最新ツアー（5件）</span></h2>
        </div>
        {tours == null ? (
          <Loading />
        ) : (
          tours.rows.map((tour) => {
            return <TourList key={tour.id} tour={tour} />;          })
        )}
      </section>
      
    </>
  );
}