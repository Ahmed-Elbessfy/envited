import React from "react";
import EventImg from "../../assets/Birthday_cake.png";

// icons
import { BiCalendar } from "react-icons/bi";
import { HiOutlineLocationMarker, HiOutlineChevronRight } from "react-icons/hi";
const Event = () => {
  // this data should come for store
  const eventData = {
    id: 0,
    name: "Birthday",
    host: "Elysia",
    start: "16 August 6:00pm",
    end: "19 August 1:00PM UTC +10",
    location: {
      street: "street name",
      suburb: "suburb",
      state: "State",
      postcode: "626262",
    },
    image: EventImg,
  };

  return (
    <div className="event-container">
      {/* event image for small screens */}
      <img src={eventData.image} alt={eventData.name} className="d-md-none" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {/* event image for medium & large screens */}
            <img
              src={eventData.image}
              alt={eventData.name}
              className="d-none d-md-block mb-3"
            />
          </div>
          <div className="col-lg-7" dir="ltr">
            {/* event name  */}
            <h1 className="mb-1">{eventData.name}</h1>
            {/* event host  */}
            <p className="neut-gray-cl mb-4">
              Hosted by <strong>{eventData.host}</strong>
            </p>
            {/* event time  */}
            <div className="row">
              <div className="col-2 d-flex justify-content-center">
                <span className="event-icon">
                  <BiCalendar />
                </span>
              </div>
              <div className="col-8">
                <p className="fw-bold mb-0">{eventData.start}</p>
                <p className="neut-dark-gray-cl">{eventData.end}</p>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <span className="neut-light-gray-cl event-icon">
                  <HiOutlineChevronRight />
                </span>
              </div>
            </div>
            {/* event location  */}
            <div className="row">
              <div className="col-2 d-flex justify-content-center">
                <span className="event-icon">
                  <HiOutlineLocationMarker />
                </span>
              </div>
              <div className="col-8">
                <p className="fw-bold mb-0">{eventData.location.street}</p>
                <p className="neut-dark-gray-cl">
                  {eventData.location.suburb},{eventData.location.state},
                  {eventData.location.postcode},
                </p>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <span className="neut-light-gray-cl event-icon">
                  <HiOutlineChevronRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
