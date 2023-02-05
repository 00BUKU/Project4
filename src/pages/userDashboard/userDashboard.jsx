import React, { useState, useEffect } from 'react';
import axios from 'axios';
import tokenService from '../../utils/tokenService';
import { Link } from 'react-router-dom';
const UserDashboard = ({ match }) => {
    const currentUser = tokenService.getUserFromToken()
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${currentUser._id}`);
        setUser(data.user);
        setBookings(data.bookings);
    } catch (err) {
        console.error(err);
    }
};

fetchUser();
}, []);
console.log(bookings._id)

  return (
    <div>
      <h1>{user.username}'s Dashboard</h1>
      <h2>Bookings:</h2>
      <ul>
      {bookings.map(booking => (
            <Link to={`/bookingDetail/${booking._id}`}>
          <li key={booking._id}>
            {booking.dateFrom} - {booking.dateTo} - {`$${booking.totalPrice}`}
          </li>
          </Link>
        ))}

      </ul>
    </div>
  );
};

export default UserDashboard;
