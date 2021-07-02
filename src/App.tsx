import React, { useState } from 'react';
import './App.scss';
import { Active } from './components/Active/Active';
import { All } from './components/All';
import { Completed } from './components/Completed';

const App: React.FC  = () => {
  const [tab, setTab] = useState<string>('All')

  return (
    <div className="app">
      <h1 className="title">#todo</h1>
      <div className="containerBtnTabs">
        <button className="btnTab" onClick={() => setTab('All')}>All</button>
        <button className="btnTab" onClick={() => setTab('Active')}>Active</button>
        <button className="btnTab" onClick={() => setTab('Completed')}>Completed</button>
      </div>
      { tab === 'All' && <All /> }
      { tab === 'Active' && <Active /> }
      { tab === 'Completed' && <Completed /> }
    </div>
  );
}

export default App;
