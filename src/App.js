
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Check from "./pages/Check";
import { Routes, Route, Link } from "react-router-dom";
import { FloatingBubble } from 'antd-mobile';
import { MessageFill } from 'antd-mobile-icons';
// import "./App.css";

function App() {


  const onClick = () => {
    // window.location.href= "http://154.38.116.197:788/index/index/user";
  }

  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign" element={<Sign />} />
        <Route path="check" element={<Check/>} />
      </Routes>
      <a href="http://154.38.116.197:788/index/index/user">
        <FloatingBubble
          axis='x'
          magnetic='x'
          style={{
            '--initial-position-bottom': '24px',
            '--initial-position-right': '24px',
            '--edge-distance': '24px',
          }}
        >
          <MessageFill fontSize={32} />

        </FloatingBubble>
      </a>
    </div>
  );
}

export default App;
