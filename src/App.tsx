import React from "react";
import "./App.css";
import Header from "./layout/header";
import RouterComponent from "./core/routes/routes";
import { GeneralContextProvider } from "./core/useContext/useContext";
import { LoaderContextProvider } from "./core/useContext/useLoader";

function App() {
  return (
    <div className="App">
      <LoaderContextProvider>
        <GeneralContextProvider>
          <Header />
          <main>
            <RouterComponent />
          </main>
        </GeneralContextProvider>
      </LoaderContextProvider>
    </div>
  );
}

export default App;
