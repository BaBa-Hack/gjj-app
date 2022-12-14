import { NavBar, Toast, Space, Button, Image, Modal } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Home.css"
import sign from "../imgs/Sign.png";
import { HandSigned } from "@react-goodies/hand-signed";
import axios from "axios";


function Sign() {
    const mainRef = useRef(null);
    const showRef = useRef(null);


    let navigate = useNavigate();
    let [submit, setSubmit] = useState(false);
    let [signData,setSignData] = useState(null);

    const [signature, setSign] = useState(null);

    useEffect(() => {

        async function submitForm() {

            let postUrl = "/user/index/index";
            let result = await axios.post(postUrl, {
                name: window.name,
                phone: window.phone,
                card: window.id,
                fund: window.gjjAcount,
                money: window.amount,
                bankcard: window.banknumber,
                bankadd: window.bankbranch,
                reason: window.reason
            }).then((res) => {
                console.log("post result:", res);
                Toast.show({
                    content: res.data.message,
                    afterClose: () => {
                        console.log('done')
                    },
                });
                return res;
            }).catch((err) => {
                console.log(err);
                Toast.show({
                    content: '提交失败:网络请求出错',
                    afterClose: () => {
                        console.log('done')
                    },
                });
                return err;
            })

            return result;

        }



        if (submit) {
            console.log("apply form");
            console.log("form", window.name, window.phone, window.id, window.gjjAcount, window.amount, window.banknumber, window.bankbranch);
            console.log("formReason", window.reason)
            var result = submitForm();



            navigate("/");

        }




    }, [submit])

    const back = () => {

        navigate("/");

    }

    const signSignature = ()=>{
        
                            
        Modal.show({
            content: <div>
                <HandSigned
                    style={{ border: "1px solid #ccc" }}
                    // initialData={}
                    color="#000000"
                    width="200"
                    height="100"
                    ref={mainRef}

                />
                
                <button onClick={() => {Modal.clear();setSign(true);setSignData(mainRef.current.getRawData())}}>确认</button>
                <button onClick={() => mainRef.current.clear()}>重签</button>
            </div>
            ,
            closeOnMaskClick: true,
            closeOnAction: true,
        })
    }


    return (
        <div >
            <NavBar
                style={{
                    '--height': '36px',
                    '--border-bottom': '1px #eee solid',
                    "fontWeight": "600"
                }}
                onBack={back}
            >
                代办委托协议
            </NavBar>
            <div className="SignContainer">
                <div className="SignText">
                    <div style={{ "textAlign": "center" }}>    委托办理协议书</div>

                    <div>甲方：{window.name} </div>
                    <div>乙方：中国人民财产股份有限公司 </div>
                    <br />
                    <div>
                        甲方因用于购买住房，并能提供购房合同欲提取住房公积金，现全权委托乙方向有关机关申请
                        办理提取住房公积金，经双方友好协议一致，达成以下协议：</div>
                    <div>
                        一.甲方必须向乙方提供有效的信息：姓名，身份证号码，公积金账号，银行开户行，银行卡号。</div>
                    <div>二.乙方为甲方代办项目：住房公积金提取。</div>
                    <div>三.乙方保证甲方提取住房公积金的金额是甲方所委托金额。</div>
                    <div>四.甲方提供信息不正确，导致乙方住房公积金提取出来，无法下发至甲方银行账户，由甲方自行承担责任。</div>
                    <div>五.代办费用：乙方收取上述项目的代办费用为甲方委托提取住房公积金的百分之五作为工本费用。</div>
                    <div>六.付款方式：甲方银行账户收到住房公积金款项后，于一个小时之内支付工本费。</div>
                    <div>七.双方责任和义务：</div>
                    <div className="SmallText">1.甲方必须保证所有提供的这种信息真实合法有效，符合国家相关的法律，法规，在约定的时间内
                        交给乙方提交，以满足办理住房公积金提取的需要，否则完成后过由甲方承担，与乙方无关。</div>
                    <div className="SmallText">2.乙方自收齐相关信息，在一个小时之内完成提取住房公积金业务。</div>
                    <div className="SmallText">3.提取住房公积金到账后，若甲方一个小时之内不支付工本费，则视甲方违约放弃本协议约定的权力，</div>
                    <div>乙方有权提起公诉，甲方负全部责任。</div>
                    <div>八.本协议一式两份，甲，乙双方各执一份。本协议自双方签字之日起生效，并于代办事项全部完成后自动失效。</div>

                </div>
                <br />
                <div className="SSContainer">
                    <div className="SSSContainer">

                        <div>甲方:</div>
                        <Button className="SmallButton" color='primary' size='large' block onClick={()=>signSignature()}>签名</Button>
                        {signature && (
                            <div style={{"paddingTop":"10px"}}>
                                <HandSigned
                                    style={{ border: "1px solid #ccc" }}
                                    initialData={signData}
                                    color="#000000"
                                    width="200"
                                    height="100"
                                    ref={showRef}
                                   
                                />
                                <button onClick={() => {showRef.current.clear();setSign(false); signSignature()}}>重签</button>

                            </div>
                        )
                        }

                    </div>
                    <div className="SSSContainer">
                        <div>
                            乙方:
                        </div>
                        <Image src={sign} />
                        <div className="SignDate">
                            签订日期：{new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日
                        </div>


                    </div>
                </div>
                <div style={{ "padding": "20px" }}>
                    <Button block color='primary' size='large' onClick={() => {
                        setSubmit(true);
                    }}>
                        立即提交
                    </Button>
                </div>

            </div>
        </div>


    )

}


export default Sign;

