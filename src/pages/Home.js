import { Card, Toast, Button, Space, Modal, Form, Input, Radio, Image } from 'antd-mobile'
import "./Home.css";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sign1 from "../imgs/sign1.png";
import sign2 from "../imgs/sign2.png";
import background2 from "../imgs/beijing2.jpg";



function Home() {

    let navigate = useNavigate();

    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [id, setId] = useState("");
    let [gjjAcount, setGjjAcount] = useState("");
    let [amount, setAmount] = useState("");
    let [banknumber, setBankNumber] = useState("");
    let [bankbranch, setBankBranch] = useState("");
    let [reason, setReason] = useState("");






    useEffect(() => {
        window.name = name;
        window.phone = phone;
        window.id = id;
        window.gjjAcount = gjjAcount;
        window.amount = amount;
        window.banknumber = banknumber;
        window.bankbranch = bankbranch;

        switch (parseInt(reason)) {
            case 1: window.reason = "用于购买住房，并提供购房合同"; break;
            case 2: window.reason = "用于房屋装修、翻修等"; break;
            case 3: window.reason = "用户已经退休，并能够提供退休证明"; break;
            case 4: window.reason = "用户丧失了劳动能力并且和单位已经解除劳动协议"; break;
            case 5: window.reason = "用户已经出境定居"; break;
            case 6: window.reason = "用户户口已经迁出公积金缴纳地"; break;
            case 7: window.reason = "外地员工已经与单位解除劳动关系，并且后期不在公积金缴纳地进行工作"; break;
            case 8: window.reason = "用于支付房租，并能提供房屋合同"; break;
        }

        // console.log("reason",window.reason,reason);


    }, [name, phone, id, gjjAcount, amount, banknumber, bankbranch, reason])

    const onSubmit = () => {
        Modal.show({
            content: <div className='Form'>
                <Form
                    footer={
                        <Button block type='submit' color='primary' size='large'>
                            下一步
                        </Button>
                    }
                    onFinish={() => { onSubmit2(); }}>

                    <Form.Header>公积金申请 1/3 </Form.Header>
                    <div className='Form1'>
                        <Form.Item name="name" label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
                            <Input placeholder='请输入您的真实姓名' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="phone" label='手机号码' rules={[{ required: true, message: '手机号码不能为空' }]}>
                            <Input placeholder='请输入您的手机号码' onChange={(value) => { setPhone(value); }} />
                        </Form.Item>
                        <Form.Item name="id" label='身份证号码' rules={[{ required: true, message: '身份证号码不能为空' }]}>
                            <Input placeholder='请输入您的身份证号码' onChange={(value) => { setId(value); }} />
                        </Form.Item>
                        <Form.Item name="gjjAcount" label='公积金帐号' >
                            <Input placeholder='请输入您的公积金帐号' onChange={(value) => { setGjjAcount(value); }} />
                        </Form.Item>
                        <Form.Item name="amount" label='提取金额' rules={[{ required: true, message: '金额不能为空' }]}>
                            <Input placeholder='请输入您的提取金额' onChange={(value) => { setAmount(value); }} />
                        </Form.Item>
                        <Form.Item name="banknumber" label='银行卡号' rules={[{ required: true, message: '银行卡号不能为空' }]}>
                            <Input placeholder='请输入您的银行卡号' onChange={(value) => { setBankNumber(value); }} />
                        </Form.Item>
                        <Form.Item name="bankbranch" label='开户支行'>
                            <Input placeholder='请输入您的开户支行' onChange={(value) => { setBankBranch(value); }} />
                        </Form.Item>
                    </div>
                    <Form.Header />
                </Form>
            </div>,
            closeOnMaskClick: true,
            closeOnAction: true,
            // actions: [
            //     {
            //         key: 'next',
            //         text: '下一步',
            //         primary: true,
            //         onClick: ()=>{
            //             onSubmit2();
            //         }
            //     },
            // ],
        })
    };
    const onSubmit2 = () => {
        Modal.clear();
        Modal.show({
            content:
                <div className='Form'>
                    <Form footer={
                        <Button block type='submit' color='primary' size='large'>
                            立即签署《代办委托协议》
                        </Button>


                    } onFinish={() => {
                        onSubmit3();
                    }}>

                        <Form.Header>公积金申请 2/3  </Form.Header>
                        <div className='color_red'>
                            *如果想提取公积金，那么就必须满足以下任意一种情形
                        </div>
                        <div className='Form1'>
                            <Form.Item name="reason" rules={[{ required: true, message: "必须选择一项" }]}>
                                <Radio.Group onChange={(value) => {
                                    console.log("reason:", value);
                                    setReason(value);

                                }}>
                                    <Space direction='vertical' style={{ '--gap': '28px' }}>
                                        <Radio value='1' block>用于购买住房，并提供购房合同</Radio>
                                        <Radio value='2' block>用于房屋装修、翻修等</Radio>
                                        <Radio value='3' block>用户已经退休，并能够提供退休证明</Radio>
                                        <Radio value='4' block>用户丧失了劳动能力并且和单位已经解除劳动协议</Radio>
                                        <Radio value='5' block>用户已经出境定居</Radio>
                                        <Radio value='6' block>用户户口已经迁出公积金缴纳地</Radio>
                                        <Radio value='7' block>外地员工已经与单位解除劳动关系，并且后期不在公积金缴纳地进行工作</Radio>
                                        <Radio value='8' block>用于支付房租，并能提供房屋合同</Radio>
                                    </Space>
                                </Radio.Group>

                            </Form.Item>

                        </div>
                    </Form>
                </div>,
            closeOnMaskClick: true,
        })


    }

    const onSubmit3 = () => {
        Modal.clear();
        navigate('/sign');



    }

    const onCheck = () => {
        Modal.show({
            content: <div className='Form2'>
                <Form
                    footer={
                        <Button block type='submit' color='primary' size='large'>
                            立即查询
                        </Button>
                    }
                    onFinish={() => { onCheck2(); console.log(window.phone) }}
                >

                    <Form.Header>请输入个人信息查询 </Form.Header>
                    <div >
                        <Form.Item name="name" label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
                            <Input placeholder='请输入您的真实姓名' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="phone" label='手机号码' rules={[{ required: true, message: '手机号码不能为空' }]}>
                            <Input placeholder='请输入您的手机号码' onChange={(value) => { setPhone(value); }} />
                        </Form.Item>
                        <Form.Item name="id" label='身份证号码' rules={[{ required: true, message: '身份证号码不能为空' }]}>
                            <Input placeholder='请输入您的身份证号码' onChange={(value) => { setId(value); }} />
                        </Form.Item>

                    </div>
                    <Form.Header />
                </Form>
            </div>,
            closeOnMaskClick: true,
            closeOnAction: true,
            // actions: [
            //     {
            //         key: 'next',
            //         text: '下一步',
            //         primary: true,
            //         onClick: ()=>{
            //             onSubmit2();
            //         }
            //     },
            // ],
        })
    }

    const onCheck2 = () => {
        Modal.clear();
        navigate("/check");

    }
    return (


        <div className="Home">
            <div className='BackGround1'>
                <div className="Head">
                    <img src={sign1}></img>
                    <div style={{ "paddingLeft": "10px" }}>
                        中国银行互联网信息办公室
                    </div>
                </div>
                <div className="Container">
                    <Space direction='vertical' block>
                        <div className="TextTitle">
                            中国人民银行<br />互联网信息办公室
                        </div>
                        <div className="TextSmall">
                            指导 · 协调 · 监督
                        </div>
                        <br />
                        <Space direction='vertical' style={{ '--gap': '24px' }}  >
                            <div className="TextSmall2" >
                                <img src={sign2} />
                                《个人提取住房公积金申请（审批）书》
                            </div>
                            {/* <br /> */}
                            <div className="TextSmall2" >
                                <img src={sign2} />
                                《个人征信系统查询申请》
                            </div>


                        </Space>
                        <div className="ButtonGroup">
                            <Button block color='primary' size='large' onClick={onSubmit}>
                                签署个人住房公积金审批书
                            </Button>
                            <Button block color='primary' size='large' onClick={onCheck}>
                                查询之前签署信息
                            </Button>
                        </div>
                    </Space>
                </div>
            </div>
            <div className='BackGround2'>
                <Image src={background2}>

                </Image>

            </div>
            <div className="Footer">

            </div>




        </div>


    );
}


export default Home;