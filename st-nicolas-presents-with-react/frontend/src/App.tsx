import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import GiftsView from './views/GiftsView';
import NotFoundView from './views/NotFoundView';


const App = () => {
  return (
    <>
      <h1>Santa App</h1>
      <Link to={'/gift'}>Go to Gifts</Link>
      <hr />
      <Routes>
        <Route path='/gift' element={<GiftsView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
