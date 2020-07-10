import React, { Component} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {    Col } from 'react-bootstrap';
class Block6 extends Component {
   
    render() {
      
      return (
   
      
        <Col md="3" className="content-wrapper">
        <div className="paddingtop0 bolder">Portfolio 
        <span className="pull-right"><select className="myselect"><option value="asset wise">Asset Wise</option></select></span>
        </div>
        <PieChart
       style={{ height: '100px' }}
       lineWidth={40} rounded 
data={[
{ title: 'One', value:  (this.props.state.chartes[0].portfolio_percent+this.props.state.chartes[1].portfolio_percent+this.props.state.chartes[2].portfolio_percent), color: '#E38627' },
{ title: 'Two', value:(this.props.state.chartes[3].portfolio_percent+this.props.state.chartes[4].portfolio_percent+this.props.state.chartes[5].portfolio_percent), color: '#C13C37' },

]}
/></Col>
               
              
     
    );
  }
  }
  
  export default Block6;