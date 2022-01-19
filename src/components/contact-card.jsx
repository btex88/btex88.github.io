import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const ContactCard = () => (
  <div
    className="w-full h-full flex flex-row items-center justify-around pb-10
        text-center"
  >
    <div className="w-auto h-auto flex flex-col items-center justify-evenly">
      <a href="https://www.linkedin.com/in/btex88/" target="_blank">
        <span className="font-semibold tracking-wider">LinkedIn</span>
        <img className="h-20 mt-3" src={linkedin} alt="linkedin" />
      </a>
    </div>
    <div className="w-auto h-auto flex flex-col items-center justify-evenly">
      <a href="https://github.com/btex88" target="_blank">
        <span className="font-semibold tracking-wider">GitHub</span>
        <img className="h-20 mt-3" src={github} alt="github" />
      </a>
    </div>
  </div>
);

export default ContactCard;
