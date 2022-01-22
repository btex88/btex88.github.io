import React from 'react';
import github from '../images/icons/github.png';
import linkedin from '../images/icons/linkedin.png';
import email from '../images/icons/email.png';
import about from '../data/about-me';

export default function ContactCard() {
  function clipboardCopy() {
    navigator.clipboard.writeText(about.email);
  }

  function handleClick() {
    clipboardCopy();
  }

  return (
    <div
      className="w-full h-full flex flex-row items-center justify-around pb-10
        text-center"
    >
      <div className="w-auto h-auto flex flex-col items-center justify-evenly">
        <a href="https://www.linkedin.com/in/btex88/" target="_blank" rel="noreferrer">
          <span className="font-semibold tracking-wider">LinkedIn</span>
          <img className="h-20 mt-3" src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="w-auto h-auto flex flex-col items-center justify-evenly">

        <a href="https://github.com/btex88" target="_blank" rel="noreferrer">
          <span className="font-semibold tracking-wider">GitHub</span>
          <img className="h-20 mt-3" src={github} alt="github" />
        </a>
      </div>
      <button
        type="button"
        className="w-auto h-auto flex flex-col items-center justify-evenly"
        onClick={() => handleClick()}
      >
        <span className="font-semibold tracking-wider">Email</span>
        <img className="h-20 mt-3" src={email} alt="email" />
      </button>
    </div>
  );
}
