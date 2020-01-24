import React, { Component } from 'react'
import { Row, Col, Divider, Button, Input, InputNumber, notification } from 'antd'
export default class FromGift extends Component {
    state = {
        prize_name: '',
        prize_detail: '',
        count: ''
    }
      onNotification = type => {
          if (type === 'warning') {
            notification[type]({
                message: 'เเจ้งเตือน',
                description:
                  'การเเจ้งเตือน การกรอกข้อมูลไม่ครบถ้วน กรุณากรอกข้อมูลให้ครบถ้วน',
                  style: {
                      top: 35
                    },
              });
          } if (type === 'success') {
            notification[type]({
                message: 'เเจ้งเตือน',
                description:
                  'การเเจ้งเตือน การกรอกข้อมูลสำเร็จ',
                  style: {
                      top: 35
                    },
              });
          }
      };
    onSubmit = async () => {
        if (this.state.prize_name !== '' && this.state.prize_detail !== '' && this.state.count !== '') {
            const data = {
                prize_name: this.state.prize_name,
                prize_detail: this.state.prize_detail,
                count: this.state.count
            }
            this.props.onAddEventGift(data);
            this.onNotification('success');
            this.props.closeModal();
        } else {
            this.onNotification('warning');
        } 
    }
    onChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeNumber = (e) => {
        this.setState({
            count: e
        })
    } 
    render() {
        return (
            <div>
                <Divider orientation="left">เพิ่มของรางวัล</Divider>
                <Row style={{marginTop: '15px'}}>
                    <Col span={5}>
                        ชื่อรางวัล
                    </Col>
                    <Col span={18} >
                        <Input 
                        onChange={this.onChange}
                        name="prize_name"
                        value={this.state.prize_name} 
                        style={{width: '100%'}} 
                        />
                    </Col>
                </Row>
                <Row style={{marginTop: '15px'}}>
                    <Col span={5}>
                        รายละเอียด
                    </Col>
                    <Col span={18}>
                        <Input 
                        onChange={this.onChange}
                        name="prize_detail"
                        value={this.state.prize_detail}
                        />
                    </Col>
                </Row>
                <Row style={{marginTop: '15px'}}>
                    <Col span={5}>
                        จำนวน
                    </Col>
                    <Col span={18}>
                    <InputNumber 
                    style={{width: '100%'}} 
                    min={1} 
                    max={10000} 
                    defaultValue={3}
                    value={this.state.count}
                    name="count" 
                    onChange={this.onChangeNumber} 
                    />
                    </Col>
                </Row>
                <Row gutter={12} style={{marginTop: '15px'}}>
                    <Col span={8} offset={4}>
                        <Button 
                        type="primary" 
                        size={"large"}
                        onClick={this.onSubmit}
                        style={{width: '100%'}}
                        >
                            บันทึก
                        </Button>
                    </Col>
                    <Col span={8}>
                        <Button 
                            type="danger" 
                            size={"large"}
                            onClick={this.props.closeModal}
                            style={{width: '100%'}}
                        >
                            ยกเลิก
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
