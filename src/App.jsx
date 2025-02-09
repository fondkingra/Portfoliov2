import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Blog from '../Pages/Blog';
import Projects from '../Pages/Projects';

import About from '../Pages/About';

const App = () => {
  return (
    <Router basename='/Portfoliov2'>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default App;