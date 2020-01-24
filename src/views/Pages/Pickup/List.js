import React, { Component } from 'react'
import {Card} from 'antd'
export default class List extends Component {
    render() {
        return (
            <div>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SEARCH" bordered={false}>
                </Card>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="PICKUP" bordered={false}>
                </Card>
            </div>
        )
    }
}
