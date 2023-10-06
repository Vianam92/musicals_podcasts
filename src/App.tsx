import React from 'react';
import './App.css';
import Header from './layout/header';
import RouterComponent from "./core/routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RouterComponent />
      </main>
    </div>
  );
}

export default App;
