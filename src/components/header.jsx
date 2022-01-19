import React from 'react';
import * as COMP from './';

const Header = () => (
  <div className="w-full h-28 flex items-center justify-around">
    <COMP.NavButton label="Home" location="/" />
    <COMP.NavButton label="Projects" location="/projects" />
    <COMP.NavButton label="Contacts" location="/contacts" />
  </div>
);

export default Header;
