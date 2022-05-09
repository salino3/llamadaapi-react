import React, { Fragment } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio.jsx";
import Personaje from "./components/Personaje.jsx";

function App() {
  return (
    <Fragment>
      <div className="container">
      <h2>Lista llamadas API</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/personaje/:id"
              element={<Personaje></Personaje>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
