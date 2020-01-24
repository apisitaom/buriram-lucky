import React, { Component } from 'react'
import { eventLuckyList } from '../../../services/API'
import { Table, Col, Row, Card, Input, Button, Select, Divider, Icon, Modal } from 'antd'
const { Option } = Select
export default class ListsEvent extends Component {
    state = {
        eventLists : [],
        event_type: 'PRIZE',
        event_status: 'OPEN',
        search: false,
        searchname: ''
    }
    UNSAFE_componentWillMount (){
        this.getEventLists();
    }
    getEventLists = async () => {
        try {
            const res = await eventLuckyList();
            this.setState({
                eventLists: res
            })
        } catch (error) {
            console.log(error);
        }
    }
    DetailLink  = async (index) => {
        const data = {
            id: index
        }
        await this.props.history.push(`/event/detail/${data.id}`)
    }
    selectOnChangeStatus = value => {
        console.log('Select Status: ', value);
        this.setState({
            event_status: value
        })
    }
    selectOnChangeEventType = value => {
        console.log('Select EventType: ', value);
        this.setState({
            event_type: value
        })
    }
    search = e => {
        this.setState({searchname: e.target.value},()=> {
            let dataSearch
            if(this.state.searchname !== ''){
                dataSearch = this.state.eventLists.filter(value=> {
                    return (value.event_name.toLowerCase().indexOf(this.state.searchname.toLowerCase()) > -1)
                })
                this.setState({dataSearch: [...dataSearch],search: true})
            }else{
                this.setState({search: false})
            }
        })}
        onHandleDelete = async (index) => {
            const data = {
                id: index
            }
            Modal.confirm({
                title: 'Are you sure to delete lucky event',
                onOk: () => this.onDeleteEvent(data)
            })
        }
        onDeleteEvent = async data => {
            // await deleteEvent(data);
        }
    render() {
        const columns = [
            {   
                title: 'ลำดับ',
                dataIndex: 'key',
                key: 'key',
                width: '5%',
                render: (text, record, index) => (
                    <span key={index}>
                        {index + 1}
                    </span>
                )
            },
            {
                title: 'วันที่เริ่ม',
                dataIndex: 'created_at',
                key: 'created_at',
            },
            {
                title: 'ชื่อโคลงการ',
                dataIndex: 'event_name',
                key: 'event_name',
            },
            {
                title: 'ผู้เข้าร่วม',
                key: 'limit_joiner',
                dataIndex: 'limit_joiner',
            },
            {
                title: 'จำนวนเบิร์นพอยท์',
                dataIndex: 'fee',
                key: 'fee',
            },
            {
                title: 'ประเภทโคลงการ',
                dataIndex: 'event_type',
                key: 'event_type',
            },
            {
                title: 'วันที่สิ้นสุด',
                dataIndex: 'expire_at',
                key: 'expire_at',
            },
            {
                title: 'สถานะ',
                dataIndex: 'event_status',
                key: 'event_status',
            },
            {
                title: 'รายละเอียด',
                dataIndex: 'event_detail',
                key: 'event_detail',
                align: 'center  ',
                render: (text, record, index) => (
                    <span>
                        <Button 
                            type='link' 
                            icon="read"
                            onClick={() => this.DetailLink(record.id)}
                        ></Button>
                        <Divider type="vertical" />
                        <Button 
                            type='link' 
                            icon='delete'
                            onClick={() => this.onHandleDelete(record.id)}
                        ></Button>
                    </span>
                )
            }
        ]
        return (
            <div>
                <Card>
                    <Row type="flex" justify="start">
                        <Col span={6}>
                            <Input 
                            placeholder="ชื่อโคลงการที่ค้นหา " 
                            style={{width: "98%", textAlign: 'center', height: '40px'}} 
                            value={this.state.searchname}
                            onChange={(e)=>this.search(e)}
                            />
                        </Col>
                        <Col span={8} style={{marginTop: '3px'}}>
                            <Icon type="loading" />
                        </Col> 
                        <Col span={4}>
                        รูปเเบบโคลงการ <Select 
                            size="large"
                            style={{ width: '60%'}}
                            onChange={this.selectOnChangeEventType}
                            value={this.state.event_type}
                            >
                                <Option value='PRIZE'>PRIZE</Option>
                                <Option value='VOTE'>VOTE</Option>
                                <Option value='OUTDOOR'>OUTDOOR</Option>
                                <Option value='CHARITY'>CHARITY</Option>
                            </Select>
                        </Col>
                        <Col span={4}>
                        สถานะโคลงการ <Select 
                            size="large"
                            style={{ width: '60%'}}
                            onChange={this.selectOnChangeStatus}
                            value={this.state.event_status}
                            >
                                <Option value='OPEN'>OPEN</Option>
                                <Option value='CLOSE'>CLOSE</Option>
                                <Option value='PLAN'>PLAN</Option>
                            </Select>
                        </Col>
                        <Col span={2}>
                            <Button 
                                type="primary"
                                style={{width: "90%"}}
                                href="/#/event/addevent"
                                size="large"
                                >
                                เพิ่ม
                                <Icon 
                                style={{ position: 'absolute', marginTop: '9px'}} 
                                type="plus-circle" />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table style={{ marginTop: '10px'}}
                            dataSource={this.state.search ? this.state.dataSearch : this.state.eventLists}
                            rowKey={(row)=> row.id}
                            columns={columns}
                            ></Table>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
