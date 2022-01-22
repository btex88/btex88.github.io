import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './global-context';

function GlobalProvider({ children }) {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [clipboardMsg, setClipboardMsg] = useState(false);

  useEffect(() => {
    const msgTimer = setInterval(() => setClipboardMsg(true), 2000);
    return () => {
      clearInterval(msgTimer);
      setClipboardMsg(true);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{ displayInfo, setDisplayInfo }}
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
