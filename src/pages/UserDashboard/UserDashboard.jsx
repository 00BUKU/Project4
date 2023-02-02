import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingForm from '../../components/BookingForm/BookingForm';

const UserDashboard = ({ user }) => {
    const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
        if (!user) return;
        axios
        .get(`/api/bookings/${user._id}`)
        .then((res) => setBookings(res.data))
        .catch((err) => console.error(err));
    }, [user]);
  
    const handleDeleteBooking = (bookingId) => {
        axios
        .delete(`/api/bookings/${bookingId}`)
        .then(() => {
            setBookings(bookings.filter((booking) => booking._id !== bookingId));
        })
        .catch((err) => console.error(err));
    };

    const handleEditBooking = (booking) => {
        // Code for editing a booking
        // ...
    };
  
    return (
      <div className="dashboard-container">
        {user ? (
          <>
            <h2>Welcome, {user.name}</h2>
            <h3>Your Bookings:</h3>
            <div className="bookings-container">
              {bookings.map((booking) => (
                <div key={booking._id}>
                  <BookingForm booking={booking} />
                  <button onClick={() => handleDeleteBooking(booking._id)}>Cancel</button>
                  <button onClick={() => handleEditBooking(booking)}>Edit</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No user data found.</p>
        )}
      </div>
    );
  };
  
  export default UserDashboard;