import React, { Component } from 'react'
import { Col, Row } from 'antd'
import FromEvent from '../../components/from/fromevent/FromEvent'
import { eventLuckyData } from '../../../../../services/API'
import { luckyeventCreate } from '../../../../../services/API'
export default class Edit extends Component {
    state = {
        dataEvent: []
    }
    UNSAFE_componentWillMount () {
        this.getDataEvent();
    }
    getDataEvent = async () => {
        try {
            const eventId = this.props.match.params.id;
            const res = await eventLuckyData(eventId);
            await this.setState({
                dataEvent: res
            })
        } catch (error) {
            console.log(error);
        }
    }
    //เพิ่มข้อมูล GIFT
    onAddEventGift = async (data) => {
        console.log('this.props :',data)
    }
    onSubmitEdit = async (data) => {
        // ADI EDIT EVENT
        console.log('API EDIT',data);
        luckyeventCreate(data);
    }
    render() {
        return (
            <Row>
                <Col>
                    <FromEvent
                    action={'edit'}
                    data = {typeof this.state.dataEvent !== 'undefined' && this.state.dataEvent } 
                    onAddEventGift={this.onAddEventGift}
                    onSubmitEdit={this.onSubmitEdit}
                    />
                </Col>
            </Row>
        )
    }
}
    