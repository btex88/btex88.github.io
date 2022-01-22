import React from 'react';
import * as COMP from '../components';

export default function Contacts() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-black px-2">
      <COMP.Header />
      <div className="w-full h-full flex flex-col items-center">
        <COMP.ContactTitle />
        <COMP.ContactCard />
      </div>
      <COMP.Footer />
    </div>
  );
}
