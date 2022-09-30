import { useState } from "react";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  // event data
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Event Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            aria-describedby="name"
          />
          <div id="name" className="form-text">
            Your event need a name.
          </div>
        </div>

        <div className="mb-3">
          <label for="host" className="form-label">
            Event Host:
          </label>
          <input
            type="text"
            className="form-control"
            id="host"
            value={host}
            aria-describedby="host"
          />
          <div id="host" className="form-text">
            Your event need a host.
          </div>
        </div>

        <div className="mb-3">
          <label for="start" className="form-label">
            Event Start Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            aria-describedby="start"
          />
          <div id="startDate" className="form-text">
            Your event need a start date.
          </div>
        </div>

        <div className="mb-3">
          <label for="end" className="form-label">
            Event End Time:
          </label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            aria-describedby="date"
          />
          <div id="endDate" className="form-text">
            Your event need a end date.
          </div>
        </div>

        <div className="mb-3">
          <label for="location" className="form-label">
            Event Location:
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            aria-describedby="location"
          />
          <div id="location" className="form-text">
            Your event need a location.
          </div>
        </div>

        <div className="mb-3">
          <label for="image" className="form-label">
            Event image:
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            aria-describedby="image"
          />
          <div id="image" className="form-text">
            Your event need a image.
          </div>
        </div>

        <Link
          to="/event"
          className="btn text-white mx-auto my-4 px-4 py-3 border-0 rounded-btn gradient-bg "
        >
          🎉 Create my event
        </Link>
      </form>
    </div>
  );
};

export default CreateEvent;
