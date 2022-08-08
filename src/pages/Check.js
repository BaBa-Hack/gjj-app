import { NavBar, Toast, Space, Button, Image } from "antd-mobile";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "axios";


function Check() {
    let navigate = useNavigate();

    const back = () => {

        navigate("/");

    }

    useEffect(() => {

        async function fetchData(phoneNumber) {

            let checkUrl = "/user/index/check"
            let result = await axios.post(checkUrl, {
                phone: phoneNumber
            }).then((res) => {
                console.log("Data fetch:", res)

                return res.data;
            }).catch((err) => {
                console.log(err);
            });


            return result;


        };




    }, [])
    return (
        <div>
            <NavBar
                style={{
                    '--height': '36px',
                    '--border-bottom': '1px #eee solid',
                    "fontWeight": "600"
                }}
                onBack={back}>

                公积金审核
            </NavBar>
            <div className="CheckContainer">

            </div>

        </div>
    );


}

export default Check;