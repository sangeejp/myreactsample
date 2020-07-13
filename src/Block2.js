import React, { Component} from 'react';
import {   Row, Col} from 'react-bootstrap';
const Block2 =(props)=>(
  <Col md="2" className="infobox">
        <Row className="ash2">
           <Col md="1" className="paddright0" ><i className="fa fa-database"></i></Col>
           <Col md="6"  className="paddright0">
             <span >Quantity</span>
      
           </Col>
           <Col md="2" className="paddright0">
  <div className="black ">{props.charts.quantity}</div>
           
           </Col>
           </Row>
           <Row className="ash2">
           <Col md="1" className="paddright0"><i className="fa fa-at"></i></Col>
           <Col md="6"  className="paddright0">
             <span className="paddright0">Avg. Cost</span>
      
           </Col>
           <Col md="2" >
  <div className="black ">${props.charts.avg_cost}</div>
           
           </Col>
           </Row>
           <Row className="ash2">
           <Col md="1" className="paddright0"><i className="fa fa-money"></i></Col>
           <Col md="6"  className="paddright0">
             <span className="paddright0">Invested Amt.</span>
      
           </Col>
           <Col md="2" >
  <div className="black ">${props.charts.avg_cost}</div>
           
           </Col>
           </Row>
        </Col>
);

  
  export default Block2;