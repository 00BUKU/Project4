import React, { useState, useEffect } from 'react';
import axios from 'axios';
import tokenService from '../../utils/tokenService';
import { Link, useNavigate } from 'react-router-dom';
const UserDashboard = ({ match }) => {
   const navigate = useNavigate()
    const currentUser = tokenService.getUserFromToken()
    const token = tokenService.getToken()
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

if(!token){
    navigate('/login') 
    return<h1>UNAUTHORIZED</h1>
}else{
  return (
    <div>
      <h1>{user.username}'s Dashboard</h1>
      <h2>Bookings:</h2>
      <ul>
      {bookings.map(booking => (
            <Link key={booking._id}to={`/bookingDetail/${booking._id}`}>
          <li >
            {booking.dateFrom} - {booking.dateTo} - {`$${booking.totalPrice}`}
          </li>
          </Link>
        ))}

      </ul>
    </div>
  )
}
};

export default UserDashboard;
