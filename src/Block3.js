import React, { Component} from 'react';
import {   Row, Col,ProgressBar } from 'react-bootstrap';

const Block3= (props)=>(
  <Col md="2" className="infobox">
                <Row className="ash2">
                   <Col md="12" className="paddright0 black" >Market Value <span className="pull-right padding-right-15">${props.charts.price*props.charts.quantity}</span> </Col>
                   <Col md="12"  className="paddright0">% of Portfolio value 
          <span className="pull-right padding-right-15">{props.charts.portfolio_percent}%</span>
              
                   </Col>
                   <Col md="12" className="paddingtop5">
                   <ProgressBar now={props.charts.portfolio_percent} />
                   
                   </Col>
                   </Row>
                   
                </Col>
);
 export default Block3;
