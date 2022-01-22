import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import about from '../data/about-me';

export default function HomeInfo() {
  const { setDisplayInfo } = useContext(GlobalContext);
  return (
    <button
      type="button"
      className="w-11/12 h-full flex flex-col items-center justify-center rounded
      py-6 md:px-20 px-4"
      style={{ backgroundColor: '#1A1A1A' }}
      onClick={() => setDisplayInfo(false)}
    >
      <span className="text-3xl text-center">Little About Me</span>
      <span className="text-center pt-4 pb-2">{ about.me }</span>
      <span className="text-center pt-2">{ about.portfolio }</span>
    </button>
  );
}
