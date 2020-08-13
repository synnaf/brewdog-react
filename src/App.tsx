import React from 'react';
import './App.css';
import { WithoutCleanUp } from './components/withoutCleanUp/WithoutCleanUp';
import WithCleanUp from './components/withCleanUp/WithCleanUp';


function App() {
  return (
    <div className="App">
      <WithoutCleanUp></WithoutCleanUp>
      <WithCleanUp></WithCleanUp>
    </div>
  );
}

export default App;
