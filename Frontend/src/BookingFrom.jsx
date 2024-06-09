import { useState } from "react";
import { bookFacility } from "./FacitityBooking";
import "./BookingFrom.css";

const BookingForm = () => {
  const [facility, setFacility] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    const result = bookFacility(facility, date, startTime, endTime);
    setMessage(result);
  };

  return (
    <div className="booking-form-container">
      <h2>Facility Booking System</h2>
      <div>
        <label>
          Facility:
          <select
            value={facility}
            onChange={(e) => setFacility(e.target.value)}
          >
            <option value="">Select Facility</option>
            <option value="Clubhouse">Clubhouse</option>
            <option value="Tennis Court">Tennis Court</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Start Time:
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          End Time:
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleBooking}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Book
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
