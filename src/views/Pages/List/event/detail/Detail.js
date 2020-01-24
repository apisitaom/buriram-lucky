import React, { Component } from 'react'
import { Col, Row, Card, List, Icon } from 'antd'
import Chart from './charts/Charts'
import TableDetail from './tabledetail/TableDetail'
import TableGift from '../../components/from/fromevent/TableGift'
import { eventLuckyData } from '../../../../../services/API'
import { CardHeader } from 'reactstrap';
export default class Detail extends Component {
    state = {
        dataEvent: []
    }
    UNSAFE_componentWillMount () {
        this.getEventDetail();
    }
    getEventDetail = async () => {
        try {
            const eventId = await this.props.match.params.id;
            const res = await eventLuckyData(eventId);
            this.setState({
                dataEvent: [res]
            })
        } catch (error) {
            console.log(error);
        }
    }
    onAddEventGift = async (data) => {
        console.log('Detail :', data);
    }
    onEdit = async (index) => {
        const data = {
            id: index
        }
        await this.props.history.push(`/event/editevent/${data.id}`)
    }
    render() {
        console.log('DETAIL : ', this.state.dataEvent);
        return (
            <div>
                <CardHeader>
                <Col span={22}><h5>{typeof this.state.dataEvent[0] !== 'undefined' ? this.state.dataEvent[0].event_name : []}</h5></Col>
                <Col>
                    <button 
                    onClick={() => this.onEdit(this.props.match.params.id)} 
                    type="button" 
                    class="btn btn-warning"
                    >เเก้ไข 
                    <Icon type="edit"></Icon>
                    </button>
                </Col>
                </CardHeader>
                    <Row style={{marginTop: '10px'}}>
                        <Col span={12}>
                            <Card style={{ width:'97.5%' }}>
                            <List
                            style={{ height: '160px' }}
                              grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3}}
                            ><Card title="รายละเอียด">
                                {typeof this.state.dataEvent[0] !== 'undefined' ? this.state.dataEvent[0].note : 'ไม่มีข้อมูล'}
                            </Card></List>
                                <TableDetail 
                                datadetail = {this.state.dataEvent.length > 0 ? [this.state.dataEvent[0]] : []}
                                style={{width: "95%", height:'120px'}}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="เวลาผู้เข้าร่วม" style={{width:'100%', height: '382px'}}> 
                                <Chart
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Card style={{ marginTop: '20px'}}>
                            <Col>
                                <TableGift
                                onAddEventGift={this.onAddEventGift}
                                data =  {this.state.dataEvent.length > 0 ? this.state.dataEvent[0].prizes : []} 
                                />
                            </Col>
                        </Card>
                    </Row>
            </div>
        )
    }
}
