import React from 'react'

import Landing from './views/landing';
import MainNav from './components/main-nav';

import './index.css';
import './variables.css';

const App = () => {
  return (
    <div className='dhauladhar-vasi'>
      <div className='wrapper'>
        <MainNav />
        <Landing />
      </div>
    </div>
  )
}

export default App;