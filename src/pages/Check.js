import { NavBar, Card, List, Image, Steps } from "antd-mobile";
import { useEffect, useState, useRef } from "react";
import { useNavigate,useLocation } from "react-router-dom";
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
    let [banknumber,setBankNumber] = useState("");
    let [time, setTime] = useState("");
    let [state, setState] = useState(0);


    let [step1,setStep1] = useState("");
    let [step2,setStep2] = useState("");
    let [step3,setStep3] = useState("");
    let [step4,setStep4] = useState("");
    let [step5,setStep5] = useState("");
    let [step6,setStep6] = useState("");

    const {state:{phoneNumber}} = useLocation();




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

        
        phone = phoneNumber;
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
            setBankNumber(data.bankcard);

            setTime(moment(data.create_time * 1000).format("YYYY-MM-DD HH:mm:ss"));
            setState(data.state);
            setStep1(data.setp1);
            setStep2(data.setp2);
            setStep3(data.setp3);

            if(data.setp4 == "")
            setStep4(moment(data.create_time * 1000).format("YYYY-MM-DD HH:mm:ss"));
            else setStep4(data.setp4);

            setStep5(data.setp5);
            setStep6(data.setp6);

            console.log("Step check",step4);
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
                            <Steps.Step title={step1} description={step4} icon={<Image
                                src={gjjlogo}

                                width={80}
                                height={80}
                            />} />
                            <Steps.Step title={step2} description={step5} 
                            icon={<Image
                                src={step2logo}

                                width={80}
                                height={80}
                            />}

                            />
                            <Steps.Step title={step3} description={step6}
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

                    {(state == 1 || state == 2) && 
                    <List.Item prefix={<div style={{ "fontSize": "large", "padding": "20px" }}>银行卡号：</div>}>
                        <div style={{ "fontSize": "large" }}>  {banknumber}</div>
                    </List.Item>
                    }

                    <List.Item prefix={<div style={{ "fontSize": "large", "padding": "20px" }}>银行开户行：</div>}>
                        <div style={{ "fontSize": "large" }}>  {bankbranch}</div>
                    </List.Item>
                </List>
            </div>

        </div>
    );


}

export default Check;