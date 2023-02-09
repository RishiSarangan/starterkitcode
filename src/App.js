import React from 'react';
import Header from './pages/Header';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import Pageabout from './pages/Pageabout';
import Pageclub from './pages/Pageclub';
import Pagecontact from './pages/Pagecontact';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path = "/" element = {<Header />}>
          <Route index element={<Home />} />
          <Route path = "home" element ={<Home />} />
          <Route path = "about" element ={<Pageabout />} />
          <Route path = "services" element ={<Pageclub />} />
          <Route path = "contact" element ={<Pagecontact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}


