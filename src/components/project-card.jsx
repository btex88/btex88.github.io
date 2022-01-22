import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({ img, label }) {
  return (
    <img
      src={img}
      alt={label}
      className="w-72 object-contain rounded hover:opacity-50 focus:opacity-50"
    />
  );
}

ProjectCard.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
