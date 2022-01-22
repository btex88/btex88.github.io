import React, { useContext, useEffect } from 'react';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';

export default function Home() {
  const { displayInfo, setDisplayInfo } = useContext(GlobalContext);

  useEffect(() => {
    if (displayInfo) setDisplayInfo(false);
    return () => {
      if (displayInfo) setDisplayInfo(false);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center bg-black px-2">
      <COMP.Header />
      <div className="w-full h-full flex items-center justify-center">
        {displayInfo ? <COMP.HomeInfo /> : <COMP.HomeTitle />}
      </div>
      <COMP.Footer />
    </div>
  );
}
