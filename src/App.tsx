import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
