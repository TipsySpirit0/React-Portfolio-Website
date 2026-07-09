import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Port from "./Port";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Port />} />
      </Routes>
    </Router>
  );
}

export default App;
