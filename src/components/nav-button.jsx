import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavButton({ label, location }) {
  return (
    <Link to={location}>
      <button
        type="button"
        className="h-16 w-auto flex flex-col items-center justify-center font-bold
          text-lg tracking-wider"
      >
        {label}
      </button>
    </Link>
  );
}

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
