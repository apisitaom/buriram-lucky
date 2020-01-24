import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Row, Col } from 'antd'
const bar = {
  labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม'],
  datasets: [
    {
      label: '1000000 พอยท์',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [100, 65, 59, 80, 81, 56, 55, 40, 5, 15],
    },
  ],
};
const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}
class Charts extends Component {
  render() {
    return (
      <div>
        <Row style={{marginTop: '15%'}}>
           <Col>
            <Bar data={bar} options={options} />
           </Col>
        </Row>
      </div>
    );
  }
}

export default Charts;
