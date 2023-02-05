import React, { useState, useEffect } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import axios from "axios";

const BookingPage = () => {
  const [pods, setPods] = useState([]);

  useEffect(() => {
    axios
      .get("/api/pos")
      .then((res) => setPods(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleBookingSubmit = (bookingData) => {
    axios
      .post("/api/bookings", bookingData)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Book a Pod</h1>
      <BookingForm pods={pods} onSubmit={handleBookingSubmit} />
    </div>
  );
};

export default BookingPage;
