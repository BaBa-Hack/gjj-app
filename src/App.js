
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign" element={<Sign/>} />
      </Routes>

    </div>
  );
}

export default App;
