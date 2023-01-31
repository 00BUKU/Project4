import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bookings">Bookings</Link></li>
              <li><Link to="/login">Login/Sign Up</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>Welcome to PodLux</h1>
          <p>Find your perfect place to sleep</p>
        </main>
      </>
    );
  };

export default HomePage;
