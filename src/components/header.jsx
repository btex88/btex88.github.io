import React from 'react';
import NavButton from './nav-button';

export default function Header() {
  return (
    <div className="w-full h-28 flex items-center justify-around">
      <NavButton label="Home" location="/" />
      <NavButton label="Projects" location="/projects" />
      <NavButton label="Contacts" location="/contacts" />
    </div>
  );
}
