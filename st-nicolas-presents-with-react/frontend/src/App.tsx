import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import GiftsView from './views/GiftsView';
import NotFoundView from './views/NotFoundView';
import SingleGiftView from './views/SingleGiftView';


const App = () => {
  const linkColor = ({ isActive }: {
    isActive: boolean;
  }) => ({color: isActive ? 'green' : 'red'});

  return (
    <>
      <h1>Santa App</h1>
      <NavLink to={'/gift'} style={linkColor}>Go to Gifts</NavLink>
      <hr />
      <Routes>
        <Route path='/gift' element={<GiftsView />} />
        <Route path='/gift/:ID' element={<SingleGiftView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
