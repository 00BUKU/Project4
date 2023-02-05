import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()
  const user = tokenService.getUserFromToken()
  const token = tokenService.getToken()
  console.log(user)
    const location = useLocation();

    const handleLogout = () => {
      tokenService.removeToken();
      navigate("/");
      };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
              <li style={{ marginRight: '1em' }}>
                <button><Link to="/">Home</Link></button>
              </li>
                <>
                  <li style={{ marginRight: '1em' }}>
                    <button><Link to='/login'>Login</Link></button>
                  </li>
                  <li>
                  <button><Link to='/signup'>Sign Up</Link></button>
              </li>
              <li>
                <button><Link to='/pods'>Book Now</Link></button>
              </li>
            </>
          
            <li>
           {!token ? null : <><button onClick={handleLogout}>Log Out</button><Link to={`/dashboard/:${user._id}`}>Dashboard</Link></>}
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
    