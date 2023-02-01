import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
              <li style={{ marginRight: '1em' }}>
                <button><Link to="/">Home</Link></button>
              </li>
              {location.pathname === '/' ? (
                <>
                  <li style={{ marginRight: '1em' }}>
                    <button><Link to='/login'>Login</Link></button>
                  </li>
                  <li>
                  <button><Link to='/signup'>Sign Up</Link></button>
              </li>
              <li>
                <button><Link to='/booking'>Book Now</Link></button>
              </li>
            </>
          ) : (
            <li>
              <button><Link to='/logout'>Logout</Link></button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
    