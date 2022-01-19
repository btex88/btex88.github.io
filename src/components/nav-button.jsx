import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ label, location }) => (
  <Link to={location}>
    <button
      className="h-16 w-auto flex flex-col items-center justify-center font-bold
          text-lg tracking-wider"
    >
      {label}
    </button>
  </Link>
);

export default NavButton;
