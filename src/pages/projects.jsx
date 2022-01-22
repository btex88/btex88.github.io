import React from 'react';
import * as COMP from '../components';
import timesheetGeneretor from '../images/thumbnails/timesheet-generator.png';
import mySudoku from '../images/thumbnails/my-sudoku.png';
import triviaApp from '../images/thumbnails/trivia-app.png';

export default function Projects() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-black px-2">
      <COMP.Header />
      <div className="w-full h-full flex flex-wrap items-center justify-evenly overflow-auto">
        <a
          href="https://timesheet-generator-eight.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="w-auto h-auto flex flex-col items-center justify-evenly p-2"
        >
          <span className="font-semibold tracking-wider mb-1">Timesheet Generator</span>
          <COMP.ProjectCard
            label="timesheet generator thumbnail"
            img={timesheetGeneretor}
          />
        </a>
        <a
          href="https://my-sudoku-six.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="w-auto h-auto flex flex-col items-center justify-evenly p-2"
        >
          <span className="font-semibold tracking-wider mb-1">my Sudoku</span>
          <COMP.ProjectCard label="my sudoku" img={mySudoku} />
        </a>
        <a
          href="https://trivia-app-gilt.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="w-auto h-auto flex flex-col items-center justify-evenly p-2"
        >
          <span className="font-semibold tracking-wider mb-1">Trivia App</span>
          <COMP.ProjectCard label="trivia app" img={triviaApp} />
        </a>
      </div>
      <COMP.Footer />
    </div>
  );
}
