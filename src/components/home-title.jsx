import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import '../style/shadow.css';

const HomeTitle = () => {
  const { setDisplayInfo } = useContext(GlobalContext);
  return (
  <div
    className="w-full h-full flex flex-col items-center justify-center"
    style={{ fontSize: '4.5rem' }}
    onClick={() => {
      setDisplayInfo(true)
      }}
  >
    <div className="w-full flex items-center justify-center">
      <div className="shadows px-3">
        <span>H</span>
        <span className="pr-4">i</span>
        <span className="pl-4">i</span>
        <span>'</span>
        <span>m</span>
      </div>
    </div>
    <div className="w-full flex items-center justify-evenly">
      <div className="shadows">
        <span>b</span>
        <span>r</span>
        <span>u</span>
        <span>n</span>
        <span>ã</span>
        <span>o</span>
      </div>
    </div>
  </div>
)};

export default HomeTitle;
