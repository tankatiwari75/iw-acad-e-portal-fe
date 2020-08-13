import React from 'react';
import './App.css';
import Navigation from './Component/Navigationbar/navigationbar'
import Maincontent from './Component/Content/Maincontent'
import Breadcrumber from "./Component/Breadcrumb/Breadcrumber"



function App() {
  return (
    <div className="App bg-light">
      <Navigation />
      <Breadcrumber />
      <Maincontent />
    </div>
  );
}

export default App;
