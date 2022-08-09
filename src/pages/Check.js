import { NavBar, Card, List, Image, Steps } from "antd-mobile";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import gjjlogo from "../imgs/2.png";
import step2logo from "../imgs/step2.png";
import step3logo from "../imgs/step3.png";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import moment from "moment";


function Check() {
    let navigate = useNavigate();
    let [data, setData] = useState(null);

    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [id, setId] = useState("");
    let [amount, setAmount] = useState("");
    let [bankbranch, setBankBranch] = useState("");
    let [time, setTime] = useState("");
    let [state, setState] = useState(0);


    const back = () => {

        navigate("/");

    }


    useEffect(() => {

        async function fetchData(phoneNumber) {

            let checkUrl = "/user/index/check"
            let result = await axios.post(checkUrl, {
                phone: phoneNumber
            }).then((res) => {
                console.log("Data fetch:", res.data)

                setData(res.data.message);
                return res.data.message;
            }).catch((err) => {
                console.log(err);
            });


            return result;


        };

        let phone = window.phone;
        if (phone)
            fetchData(phone);


    }, []);

    useEffect(() => {

        if (data) {

            console.log("fetching data : ", data);
            setName(data.name);
            setPhone(data.phone);
            setId(data.card);
            setAmount(data.money);
            setBankBranch(data.bankadd);

            setTime(moment(data.create_time * 1000).format("YYYY-MM-DD HH:mm:ss"));
            setState(data.state);
        }

    }, [data])






    return (
        <div>
            <NavBar
                style={{
                    '--height': '36px',
                    '--border-bottom': '1px #eee solid',
                    "fontWeight": "600",
                    "background": "#eeeeee"
                }}
                onBack={back}>

                公积金审核
            </NavBar>
            <div className="CheckContainer">
                <List>
                    <List.Item description='公积金提取' >
                        <div className="ListContainer">
                            <div style={{
                                "fontSize": "large",
                            }}>
                                ￥
                            </div>
                            <div style={{
                                "fontSize": "xxx-large"

                            }}>
                                {amount}
                            </div>
                        </div>
                    </List.Item>
                    <List.Item
                        prefix={
                            <Image
                                src={gjjlogo}

                                fit='cover'
                                width={80}
                                height={80}
                            />
                        }
                    >
                        <div style={{
                            "fontSize": "large",
                            "fontWeight": "bold"
                        }}>
                            住房公积金委员管理会                            </div>
                    </List.Item>
                </List>
                <List style={{ "paddingTop": "10px" }}>
                    <List.Item>
                        <Steps current={state}>
                            <Steps.Step title='审核中' description={time} icon={<Image
                                src={gjjlogo}

                                width={80}
                                height={80}
                            />} />
                            <Steps.Step title='下款中' icon={<Image
                                src={step2logo}

                                width={80}
                                height={80}
                            />}

                            />
                            <Steps.Step title='成功到账' description='审核通过即可下款'
                                icon={<Image
                                    src={step3logo}

                                    width={80}
                                    height={80}
                                />} />
                        </Steps>
                    </List.Item>
                    <List.Item prefix={<div style={{ "fontSize": "large", "padding": "20px" }}>姓名：</div>}>
                        <div style={{ "fontSize": "large" }}>{name}</div>

                    </List.Item>
                    <List.Item prefix={<div style={{ "fontSize": "large", "padding": "20px" }}>手机号码：</div>}>
                        <div style={{ "fontSize": "large" }}>  {phone}</div>
                    </List.Item>
                    <List.Item prefix={<div style={{ "fontSize": "large", "padding": "20px" }}>身份证号码：</div>}>
                        <div style={{ "fontSize": "large" }}>  {id}</div>
                    </List.Item>
                    <List.Item prefix={<div style={{ "fontSize": "large", "padding": "20px" }}>提取金额：</div>}>
                        <div style={{ "fontSize": "large" }}>  {amount}</div>
                    </List.Item>
                    <List.Item prefix={<div style={{ "fontSize": "large", "padding": "20px" }}>银行开户行：</div>}>
                        <div style={{ "fontSize": "large" }}>  {bankbranch}</div>
                    </List.Item>
                </List>
            </div>

        </div>
    );


}

export default Check;