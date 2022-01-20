import React from 'react';
import * as COMP from '../components';

const Projects = () => (
  <div className="w-full h-full flex flex-col items-center bg-black px-2">
    <COMP.Header />
    <div className="w-full h-full flex flex-col items-center justify-center">
      <span className="text-5xl tracking-wider">In Development</span>
    </div>
    <COMP.Footer />
  </div>
);

export default Projects;
