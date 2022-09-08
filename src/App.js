
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Check from "./pages/Check";
import { Routes, Route, Link } from "react-router-dom";
import { FloatingBubble } from 'antd-mobile';
import { MessageFill } from 'antd-mobile-icons';
import { useEffect,useState } from "react";
import axios from "axios";
// import "./App.css";

function App() {

  let [kefuUrl,setKefu] = useState();

  const onClick = () => {
    // window.location.href= "http://154.38.116.197:788/index/index/user";
  }

  useEffect(()=>{

    async function getKefuUrl(){

 let checkUrl = "/user/index/kefu";
    let result = await axios.post(checkUrl).then(res => {

      console.log(res.data.message);
      return res.data.message.kefu_url;
    })

    setKefu(result);

    }

    getKefuUrl();
   




  },[])

  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign" element={<Sign />} />
        <Route path="check" element={<Check/>} />
      </Routes>
      <a href={kefuUrl}>
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
