import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Topbar from "./components/Topbar";
function App() {

  return (
    <div className='app'>
      <Topbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
