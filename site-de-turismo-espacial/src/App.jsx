import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

function App() {

  return (
    <div className='app'>
      {/* <Topbar /> */}
      {/* <div className="content"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      {/* </div> */}
    </div>
  )
}

export default App;
