import React from 'react';
import './styles/App.css';
import './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateCharacter from "./components/CreateCharacter";
import ViewCharacter from "./components/ViewCharacter";
import Rules from "./components/Rules";

function App() {

  return (
      <>
          <NavBar/>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="rules" element={<Rules />} />
                <Route path="create" element={<CreateCharacter/>} />
                <Route path="view" element={<ViewCharacter />} />
                <Route path="*"/>
              </Route>
            </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
