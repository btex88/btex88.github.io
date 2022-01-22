import React from 'react';
import '../style/shadow.css';

export default function ContactTitle() {
  return (
    <div
      className="w-full h-24 flex flex-col items-center justify-center"
      style={{ fontSize: '2.5rem' }}
    >
      <div className="w-full flex items-center justify-center border-b">
        <div className="shadows px-3">
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span className="pr-4">t</span>
          <span className="pl-4">M</span>
          <span>e</span>
        </div>
      </div>
    </div>
  );
}
