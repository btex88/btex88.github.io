import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Contacts from '../pages/contacts';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default Router;
