import React from 'react';
import AddGift from './components/AddGift/AddGift';
import GiftsView from './views/GiftsView';


const App = () => {
  return (
    <>
      <GiftsView />
      <AddGift />
    </>
  );
}

export default App;
