import React, { Component } from 'react'
import { Col, Row } from 'antd'
import FromEvent from '../../components/from/fromevent/FromEvent'
import { luckyeventCreate } from '../../../../../services/API'
export default class Add extends Component { 
    state = {
        dataEvent: [],
        valuesFromEvent : {
            "event_id":"a87234fe-cd1c-418e-bcac-3e63b45c011b",
            "event_name":"ปลูกป่าช่วยชาติ",
            "event_detail":	"สมาชิกใช้แต้ม 10 คะแนน เพื่อสนับสนุนโครงการปลูกป่า ลุ้นทานข้าวกับนักฟุตบอล, เสื้อบอลที่ใช้แล้วของนักบอลที่ชื่นชอบ",
            "event_type": "PRIZE",
            "event_other_type":"CHARITY",
            "event_tag": "forest",
            "fee": 10,	
            "limit_user": 0,
            "limit_joiner": 10,
            "limit_per_user": 0,
            "prizes":[
                {
                    "prize_name": "กินข้าวกับนักฟุตบอลที่ชื่นชอบ",
                    "prize_detail": "กินข้าวกับนักฟุตบอลที่ชื่นชอบ",
                    "count": 5
                },
                {
                    "prize_name": "เสื้อนักฟุตบอลที่ชื่นชอบ",
                    "prize_detail": "เสื้อนักฟุตบอลที่ชื่นชอบ",
                    "count": 10
                }
            ],
            "note":"",
            "event_status":"OPENED",
            "open_at": "2019-09-09 00:00:00",
            "expire_at": "2019-10-09 00:00:00"
        }
    }
    UNSAFE_componentWillMount () {
    }
    handleOnChange  = async() => {
        this.setState({
            valuesFromEvent: this.state.valuesFromEvent
        })
    }
    //เพิ่มข้อมูล GIFT
    onAddEventGift = async (data) => {
        console.log('this.props :',data);
    }
    //เพิ่มข้อมูล EVENT
    onSubmitAdd = async (data) => {
        console.log('API ADD',data);
        luckyeventCreate(data);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <FromEvent 
                            data =  {this.state.valuesFromEvent} 
                            onAddEventGift={this.onAddEventGift}
                            onSubmitAdd = {this.onSubmitAdd}
                        />                    
                    </Col>
                </Row>
            </div>
        )
    }
}
