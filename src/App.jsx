import React from 'react';
import Card1 from './Compoments/Card1';
import Card2 from './Compoments/Card2';
import Card3 from './Compoments/Card3';
import '../src/App.css'

const App = () => {
  return (
    <div className='Container1'>
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default App;