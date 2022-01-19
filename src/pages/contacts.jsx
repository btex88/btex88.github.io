import React from 'react';
import * as COMP from '../components';

const Contacts = () => (
  <div className="w-full h-full flex flex-col items-center bg-black px-2">
    <COMP.Header />
    <div className="w-full h-full flex flex-col items-center">
      <COMP.ContactTitle />
      <COMP.ContactCard />
    </div>
    <COMP.Footer />
  </div>
);

export default Contacts;
