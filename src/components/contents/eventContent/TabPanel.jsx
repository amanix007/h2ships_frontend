import EventCard from "./EventCard";
function TabPanel() {
  return (
    <div className="tabPanel container">
      <h1 className="text-center tabPanel__title">Events</h1>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tabPanel__nav-link active"
            id="upcoming"
            data-bs-toggle="pill"
            data-bs-target="#pills-upcoming"
            type="button"
            role="tab"
            aria-controls="pills-upcoming"
            aria-selected="true"
          >
            UPCOMING EVENTS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tabPanel__nav-link"
            id="postponed"
            data-bs-toggle="pill"
            data-bs-target="#pills-postponed"
            type="button"
            role="tab"
            aria-controls="pills-postponed"
            aria-selected="false"
          >
            POSTPONED
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tabPanel__nav-link"
            id="past"
            data-bs-toggle="pill"
            data-bs-target="#pills-past"
            type="button"
            role="tab"
            aria-controls="pills-past"
            aria-selected="false"
          >
            PAST
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tabPanel__nav-link"
            id="canceled"
            data-bs-toggle="pill"
            data-bs-target="#pills-canceled"
            type="button"
            role="tab"
            aria-controls="pills-canceled"
            aria-selected="false"
          >
            CANCELED
          </button>
        </li>
      </ul>

      <div
        className="tab-content tabPanel__tab-content shadow"
        id="pills-tabContent"
      >
        <div
          className="tab-pane fade show active"
          id="pills-upcoming"
          role="tabpanel"
          aria-labelledby="pills-upcoming-tab"
        >
          <div className="eventCard__flex">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-postponed"
          role="tabpanel"
          aria-labelledby="pills-postponed-tab"
        >
          <div className="eventCard__flex">
            <EventCard />
            <EventCard />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-past"
          role="tabpanel"
          aria-labelledby="pills-past-tab"
        >
          <div className="eventCard__flex">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-canceled"
          role="tabpanel"
          aria-labelledby="pills-canceled-tab"
        >
          <div className="eventCard__flex">
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
