import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { set } from 'mongoose';


const BookingDetail = () => {

    const navigate = useNavigate()

  const [booking, setBooking] = useState({});
  const [updatedBooking, setUpdatedBooking] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const { data } = await axios.get(`/api/bookings/${id}`);
        setBooking(data.booking);
        setUpdatedBooking(data.booking);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooking();
  }, []);

  const handleChange = (event) => {
    setUpdatedBooking({
      ...updatedBooking,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const updatedData = await axios.patch(`/api/bookings/${id}`, {
        dateFrom: updatedBooking.dateFrom,
        dateTo: updatedBooking.dateTo,
        totalPrice: updatedBooking.totalPrice,
      });
      setBooking(updatedData.data);
      navigate(`/dashboard/${id}`);
    
    }

    catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/bookings/${id}`);
      navigate(`/dashboard/${id}`);
      setBooking(updatedData.data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <label htmlFor="dateFrom">Date From:</label>
      <input
        type="date"
        id="dateFrom"
        name="dateFrom"
        value={updatedBooking.dateFrom}
        onChange={handleChange}
      />

      <label htmlFor="dateTo">Date To:</label>
      <input
        type="date"
        id="dateTo"
        name="dateTo"
        value={updatedBooking.dateTo}
        onChange={handleChange}
      />

      <label htmlFor="totalPrice">Total Price:</label>
      <input
        type="number"
        id="totalPrice"
        name="totalPrice"
        value={updatedBooking.totalPrice}
        onChange={handleChange}
      />

      <button type="submit">Update Booking</button>
      <button onClick={handleDelete}>Delete Booking</button>
    </form>
  );
};

export default BookingDetail;