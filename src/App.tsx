import React from "react";
import "./App.css";
import Header from "./layout/header";
import RouterComponent from "./core/routes/routes";
import { GeneralContextProvider } from "./core/useContext/useContext";
import { LoaderContextProvider } from "./core/useContext/useLoader";
import { TimeContextProvider } from "./core/useContext/useTime";

function App() {
  return (
    <div className="App">
      <LoaderContextProvider>
      <TimeContextProvider>
        <GeneralContextProvider>
          <Header />
          <main>
            <RouterComponent />
          </main>
        </GeneralContextProvider>
        </TimeContextProvider>
      </LoaderContextProvider>
    </div>
  );
}

export default App;
