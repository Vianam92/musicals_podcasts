import React from "react";
import "./App.css";
import Header from "./layout/header";
import RouterComponent from "./core/routes/routes";
import { LoaderContextProvider } from "./core/useContext/useLoader";
function App() {
  return (
    <div className="App">
      <LoaderContextProvider>
        <Header />
        <main>
          <RouterComponent />
        </main>
      </LoaderContextProvider>
    </div>
  );
}

export default App;
