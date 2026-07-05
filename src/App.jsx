import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Port from "./Port";

import Navbar from "./components/NewNavbar";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Port />} />
    //   </Routes>
    // </Router>
    <Navbar />
  );
}

export default App;
