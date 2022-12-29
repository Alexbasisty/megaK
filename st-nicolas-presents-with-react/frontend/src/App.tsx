import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import GiftsView from './views/GiftsView';
import NotFoundView from './views/NotFoundView';


const App = () => {
  return (
    <>
      <h1>Santa App</h1>
      <NavLink to={'/gift'} style={({isActive}) => ({color: isActive ? 'green' : 'red'})}>Go to Gifts</NavLink>
      <hr />
      <Routes>
        <Route path='/gift' element={<GiftsView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
