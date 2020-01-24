import React, { Component } from 'react'
import { Table, Col, Row } from 'antd'
export default class TableDetail extends Component {
    state = {
        dataEvent: []
    }
    render() {
        const columns = [
            {
                title: 'รูปแบบโคลงการ',
                dataIndex: 'event_type',
                key: 'event_type',
            },
            {
                title: 'จำนวนผู้เข้าร่วม',
                dataIndex: 'fee',
                key: 'fee',
            },
            {
                title: 'จำนวนสิทธิ์/คน',
                dataIndex: 'limit_per_user',
                key: 'limit_per_user',
            },
            {
                title: 'จำนวนสิทธิ์ร่วม',
                dataIndex: 'limit_joiner',
                key: 'limit_joiner',
            }
        ]
        return (
            <Row>
                <Col>
                    <Table 
                    rowKey={(row)=> row.id}
                    dataSource={this.props.datadetail}
                    columns={columns}
                    ></Table>
                </Col>
            </Row>
        )
    }
}
