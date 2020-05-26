import React, { Component } from 'react';
import './App.css';
import Api from './Api.js';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>This is page is for Covid-19 watcher</h1>
      </header>
     
      <Api />


    </div>
  );
}

export default App;
