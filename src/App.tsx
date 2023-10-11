import React from "react";
import "./App.css";
import Header from "./common/layout/header";
import RouterComponent from "./core/routes/routes";
import { GeneralContextProvider } from "./core/useContext/useContext";
import { LoaderContextProvider } from "./core/useContext/useLoader";
import { TimeContextProvider } from "./core/useContext/useTime";

function App() {
  return (
    <div className="App">
      
      <TimeContextProvider>
      <LoaderContextProvider>
        <GeneralContextProvider>
          <Header />
          <main>
            <RouterComponent />
          </main>
        </GeneralContextProvider>
        </LoaderContextProvider>
        </TimeContextProvider>
    </div>
  );
}

export default App;
