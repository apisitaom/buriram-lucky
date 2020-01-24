import React, { Component } from 'react'
import moment from "moment";
import TableGift from '../../../components/from/fromevent/TableGift'
import { Col, Row, Card, Input, DatePicker, Select, Radio, InputNumber, notification } from 'antd'
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
export class FromEvent extends Component {
    state = {
        dataEvent: [],
        event_name: '',
        event_detail: '',
        open_at: '',
        expire_at: '',
        event_type: '', 
        fee: '', 
        event_status: '', 
        limit_joiner: '', 
        limit_per_user: '', 
        limit_user: '',
        count: '', 
        classButton: 'btn btn-success',
        event_id: ''
    }
    UNSAFE_componentWillMount () {
    }
    UNSAFE_componentWillReceiveProps (nextprops){
        console.log('NEXT PROPS ', nextprops.data.id);
        console.log('THIS.PROPS', this.props);
        if(this.props.data !== 'undefined' && this.props.action === "edit") {
            this.onSetedit(nextprops) 
            this.setState({
                classButton: 'btn btn-warning',
                event_id: nextprops.data.id
            });
        }
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
    onAddEvent = async () => {
        if (this.state.event_name !== '' && this.state.event_detail !== '' && this.state.open_at !== '' && this.state.expire_at !== ''
            && this.state.event_type !== '' && this.state.fee !== '' && this.state.event_status !== '' && this.state.limit_joiner !== ''
            && this.state.limit_per_user !== '' && this.state.limit_user !== '') {
            const data = {
                event_name: this.state.event_name,
                event_detail: this.state.event_detail,
                open_at: this.state.open_at,
                expire_at: this.state.expire_at,
                event_type: this.state.event_type,
                fee: this.state.fee,
                event_status: this.state.event_status,
                limit_joiner: this.state.limit_joiner,
                limit_per_user: this.state.limit_per_user,
                limit_user: this.state.limit_user
            }        
            this.props.onSubmitAdd(data);
            this.onNotification('success');
        } else {
            this.onNotification('warning')
        }
    }
    onSetedit = (nextprops) => { 
        this.setState({
            event_name: nextprops.data.event_name,
            event_detail: nextprops.data.event_detail,
            open_at: nextprops.data.open_at,
            expire_at: nextprops.data.expire_at,
            event_type: nextprops.data.event_type,
            fee: nextprops.data.fee,
            event_status: nextprops.data.event_status,
            limit_joiner: nextprops.data.limit_joiner,
            limit_per_user: nextprops.data.limit_per_user,
            limit_user: nextprops.data.limit_user
        })
    }
    onEditEvent = async () => {
        const data = {
            event_id: this.state.event_id,
            event_name: this.state.event_name,
            event_detail: this.state.event_detail,
            open_at: this.state.open_at,
            expire_at: this.state.expire_at,
            event_type: this.state.event_type,
            fee: this.state.fee,
            event_status: this.state.event_status,
            limit_joiner: this.state.limit_joiner,
            limit_per_user: this.state.limit_per_user,
            limit_user: this.state.limit_user
        }        
        this.props.onSubmitEdit(data);
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDatePicker = (dates, dateStrings) => {
        console.log('from: ', dateStrings[0], ', to: ', dateStrings[1]);
        this.setState({
            open_at: dateStrings[0],
            expire_at: dateStrings[1]
        })
    }
    onChangeNumber = (key) => (e) => {
        this.setState({
            [key]: e
        })
    }
    onChangeRedio = (key) => (e) => {
        this.setState({
            [key]: 'unlimit'
        })
    }
    selectOnChangeStatus = value => {
        this.setState({
            event_status: value
        })
    }
    selectOnChangeEventType = value => {
        this.setState({ 
            event_type: value
        })
    }
    render() {
        console.log('PROPS DATA API :::', this.props.data);
        return (
            <div>
                <Card title = "เพิ่มกิจกรรม"  >       
                    <Row>
                        <Col span={6}>
                            ชื่อโครงการ
                        </Col>
                        <Col span={12}>
                        <Input 
                        onChange={this.onChange}
                        name="event_name"
                        value={this.state.event_name}
                        style={{width: "98%"}}
                        ></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            รายละเอียด
                        </Col>
                        <Col span={12} style={{ marginTop: '15px'}}>
                        <TextArea
                        onChange={this.onChange}
                        name="event_detail"
                        value={this.state.event_detail}
                        style={{width: "98%", height: '110px'}} 
                        />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            ระยะเวลา
                        </Col>
                        <Col span={8} style={{ marginTop: '15px'}}>
                            <RangePicker
                                onChange={this.onChangeDatePicker}
                                style={{width: "98%"}}
                                ranges={{
                                  Today: [moment(), moment()],
                                  'This Month': [moment().startOf('month'), moment().endOf('month')],
                                }}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        </Col>
                    </Row>  
                    <Row style={{ marginTop: '15px'}}>
                        <Col span={8}>
                        รูปเเบบโคลงการ <Select 
                            style={{ width: '60%' }}
                            onChange={this.selectOnChangeEventType}
                            value={this.state.event_type}
                            >
                                <Option value='PRIZE'>PRIZE</Option>
                                <Option value='VOTE'>VOTE</Option>
                                <Option value='OUTDOOR'>OUTDOOR</Option>
                                <Option value='CHARITY'>CHARITY</Option>
                            </Select>
                        </Col>
                        <Col span={8} >
                            point <InputNumber 
                                    min={1} 
                                    defaultValue={3}
                                    onChange={this.onChangeNumber('fee')}
                                    value={this.state.fee}
                                    name="fee"
                                    style={{width: '60%'}}
                            />
                        </Col>
                        <Col span={8}>
                            สถานะ <Select 
                            style={{ width: '60%' }}
                            onChange={this.selectOnChangeStatus}
                            value={this.state.event_status}
                            >
                                <Option value='OPEN'>OPEN</Option>
                                <Option value='CLOSE'>CLOSE</Option>
                                <Option value='PLAN'>PLAN</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '15px'}}>
                        <Col span={6}>  
                            กำหนดผู้เข้าร่วมกิจกรรม
                        </Col>
                        <Col span={12}>
                                <Radio value={1}>
                                    <InputNumber
                                    onChange={this.onChangeNumber('limit_joiner')}
                                    name="limit_joiner"
                                    value={this.state.limit_joiner} 
                                    style={{ width:'65%'}}
                                    min={1}
                                    />
                                    คน</Radio >
                                <Radio 
                                onChange={this.onChangeRedio('limit_joiner')}
                                value={this.state.limit_joiner}
                                name="limit_joiner" 
                                style={{ left: '55px'}}
                                >ไม่จำกัด</Radio>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '15px'}}>
                        <Col span={6}>  
                            จำนวนสิทธิ์ต่อคน
                        </Col>
                        <Col span={12}>
                                <Radio value={1}>
                                    <InputNumber 
                                    onChange={this.onChangeNumber('limit_per_user')}
                                    name="limit_per_user"
                                    value={this.state.limit_per_user}
                                    style={{ width:'65%'}}
                                    min={1}
                                    />
                                    สิทธิ์
                                    </Radio>
                                <Radio
                                onChange={this.onChangeRedio("limit_per_user")}
                                value={this.state.limit_per_user} 
                                name="limit_per_user"
                                style={{ left: '50px'}
                                }>ไม่จำกัด</Radio>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '15px'}}>
                        <Col span={6}>  
                            จำกัดเเค่จำนวนสิทธิ์
                        </Col>
                        <Col span={12}>
                                <Radio value={1}>
                                    <InputNumber 
                                    onChange={this.onChangeNumber('limit_user')}
                                    name="limit_user"
                                    value={this.state.limit_user}
                                    style={{ width:'65%'}}
                                    min={1}
                                    />
                                    สิทธิ์</Radio>
                                <Radio
                                onChange={this.onChangeRedio("limit_user")}
                                value={this.state.limit_user} 
                                name="limit_user"
                                style={{ left: '50px'}
                                }>ไม่จำกัด</Radio>
                        </Col>
                    </Row>
                </Card>
                <Card  style={{ marginTop: '20px'}}>
                    <Row>
                        <Col>
                            <TableGift
                                data = {this.props.data.prizes}
                                onAddEventGift={this.props.onAddEventGift}
                            >
                            </TableGift>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop: '15px'}}>
                        <Col span={4} >
                            <button type="button" 
                            className={this.state.classButton}
                            style= {{width: '97.5% ', height: '40px'}}
                            onClick={this.props.action !== 'edit' ? this.onAddEvent : this.onEditEvent}
                            >
                                {this.props.action !== 'edit' ? 'บันทึก' : 'เเก้ไข'}
                            </button>
                        </Col>
                        <Col span={4}>
                            <button type="button" className="btn btn-danger"
                            style= {{width: '97.5% ', height: '40px'}}
                            >
                                ยกเลิก
                            </button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default FromEvent
