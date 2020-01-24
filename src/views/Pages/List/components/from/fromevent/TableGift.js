import React, { Component } from 'react'
import { Table, Col, Row, Card, Button, Modal, Icon } from 'antd'
import FromGift from '../../../components/from/fromevent/fromgift/FromGift'
export default class TableGift extends Component {
    state = {
        dataEvent: [],
        visible: false
    }
    onShowModal = async () => {
        this.setState({
            visible: true
        })
    }
    onCloseModal = async () => {
        this.setState({
            visible: false
        })
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
                title: 'รางวัล',
                dataIndex: 'prize_name',
                key: 'prize_name',
            },
            {
                title: 'รายละเอียด',
                dataIndex: 'prize_detail',
                key: 'prize_detail',
            },
            {
                title: 'จำนวน',
                dataIndex: 'count',
                key: 'count',
            },
            {
                title: '',
                dataIndex: '',
                key: '',
            }
        ]
        return (
            <div>
                <Row>
                    <Card>
                        <Col>
                            <Table 
                                rowKey={(row, index)=> index}
                                dataSource={this.props.data}
                                columns={columns}
                            ></Table>
                            <Button 
                            type="primary" 
                            size={"large"} 
                            style= {{width: '100% '}} 
                            onClick={() => this.onShowModal()}
                            >
                                เพิ่ม
                                <Icon
                                style={{ position: 'absolute', marginTop: '3px'}}  
                                type="plus-circle" />
                            </Button>
                        </Col>
                    </Card>
                </Row>
                <Row>
                    <Modal
                        visible={this.state.visible}
                        footer={null}
                        closable ={false}
                    >
                        <FromGift
                        onAddEventGift={this.props.onAddEventGift}
                        closeModal={this.onCloseModal}
                        />
                    </Modal>
                </Row>
            </div>
        )
    }
}
