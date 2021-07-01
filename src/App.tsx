import React, { useState } from 'react';
import './App.scss';
import { Active } from './pages/Active';
import { All } from './pages/All';
import { Completed } from './pages/Completed';

const App: React.FC  = () => {
  const [tab, setTab] = useState<string>('All')

  return (
    <div className="app">
      <h1 className="title">#todo</h1>
      <button onClick={() => setTab('All')}>All</button>
      <button onClick={() => setTab('Active')}>Active</button>
      <button onClick={() => setTab('Completed')}>Completed</button>

      { tab === 'All' && <All /> }
      { tab === 'Active' && <Active /> }
      { tab === 'Completed' && <Completed /> }
    </div>
  );
}

export default App;
