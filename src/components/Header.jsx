import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../Images/logo.png';

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="container_nav">
          <div className="logo">
            <img src={logo} alt="logo" width={70} />
            <h1>Space Travelers Hub</h1>
          </div>
          <div className="routeLinks">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : '',
              })}
            >
              Rockets
            </NavLink>
            <NavLink
              to="/missions"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : '',
              })}
            >
              Missions
            </NavLink>
            <span
              style={{
                borderLeft: '2px solid #000',
                height: '16px',
                marginLeft: '-1.4rem',
              }}
            />
            <NavLink
              to="/myProfile"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : '',
              })}
              className="profile"
            >
              My Profile
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
export default Header;
