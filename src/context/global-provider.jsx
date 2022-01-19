import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './global-context';

const GlobalProvider = ({ children }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ displayInfo, setDisplayInfo }}
    >
      { children }
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
