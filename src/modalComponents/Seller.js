import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import pic from '../assets/img/no-image-icon.png'
export default class Seller extends Component {
    render() {
        return (
            <div>
                <Row gutter={48}>
                    <Col span={8}>
                        <Row type="flex" style={{ justifyContent: 'center', borderStyle: 'groove' }}>
                            <img src={pic} style={{ width: '70%' }} alt='seller-profile'/>
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row type="flex" style={{ justifyContent: 'center',marginBottom:'1%' }}>
                            <h2>ชื่อร้านค้า</h2>
                        </Row>
                    <Row gutter={48}>
                        <Col span={6}><b>ที่อยู่ :</b></Col>
                        <Col span={18}>AAAAA</Col>
                    </Row>
                    <Row gutter={48}>
                        <Col span={6}><b>ตำบล/แขวง :</b></Col>
                        <Col span={18}>BBBBBBB</Col>
                    </Row>
                    <Row gutter={48}>
                        <Col span={6}><b>อำเภอ/เขต :</b></Col>
                        <Col span={18}>NNNNNN</Col>
                    </Row>
                    <Row gutter={48}>
                        <Col span={6}><b>จังหวัด :</b></Col>
                        <Col span={18}>MMMM</Col>
                    </Row>
                    <Row gutter={48}>
                        <Col span={6}><b>รหัสไปรษณีย์ :</b></Col>
                        <Col span={18}>123456</Col>
                    </Row>
                    <Row gutter={48}>
                        <Col span={6}><b>Email :</b></Col>
                        <Col span={18}>aaa@mail.com</Col>
                    </Row>
                    <Row gutter={48}>
                        <Col span={6}><b>เบอร์โทรศัพท์ :</b></Col>
                        <Col span={18}>0258963147</Col>
                    </Row>
                    <Row gutter={48}>
                        <Col span={10}><b>หมายเลขประจำตัวผู้เสียภาษี :</b></Col>
                        <Col span={14}>1234567893</Col>
                    </Row>
                    </Col>
                </Row>
                <Divider orientation="left">ข้อมูลบัญชีธนาคาร</Divider>
                <Row span={24} style={{marginBottom:'1%'}}>
                    <Col span={6}><b>ชื่อธนาคาร :</b></Col>
                    <Col span={18}>
                        SCB
                    </Col>
                </Row>
                <Row span={24} style={{marginBottom:'1%'}}>
                    <Col span={6}><b>หมายเลขบัญชี :</b></Col>
                    <Col span={18}>
                        123456789
                    </Col>
                </Row><Row span={24} style={{marginBottom:'1%'}}>
                    <Col span={6}><b>ชื่อบัญชี :</b></Col>
                    <Col span={18}>
                        KKKKKKKKKKKKKKK KKKKKKKKKKK
                    </Col>
                </Row>
                <Divider orientation="left">ข้อมูลบัญชีพร้อมเพย์</Divider>
                <Row span={24} style={{marginBottom:'1%'}}>
                    <Col span={6}><b>ชื่อบัญชี :</b></Col>
                    <Col span={18}>
                        DDDDD KKKKK
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={6}><b>หมายเลขโทรศัพท์/เลขประตัวประชาชน :</b></Col>
                    <Col span={18}>
                        0952366623
                    </Col>
                </Row>
            </div>
        )
    }
}
