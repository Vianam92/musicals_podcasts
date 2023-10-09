import React from "react";
import "./App.css";
import Header from "./layout/header";
import RouterComponent from "./core/routes/routes";
import { GeneralContextProvider } from "./core/useContext/useContext";

function App() {
  return (
    <div className="App">
      <GeneralContextProvider>
        <Header />
        <main>
          <RouterComponent />
        </main>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
