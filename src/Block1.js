import React, { Component} from 'react';
import {   Row, Col } from 'react-bootstrap';
class Block1 extends Component {
    
    render() {
      
      return (
   
      
                  <Col md="3" className="infobox">
                  <Row>
                     <Col md="1" ><i className="fa fa-bars"></i></Col>
                     <Col md="3"  className="text-center"><span className="ash ash2">{this.props.charts.name}</span>
                    <div className="bluediv "><span className="bigger ash">$</span>
            <span className="bigger blue">{this.props.charts.price}</span></div>
                     </Col>
                     <Col md="7" >
                       <div className="bigger ishares">iShares</div>
                       <div className="smaller"> by BlackRocx</div>
                       <div className="bolder bold2"> S&P 500 INDEX</div>
                       <div className="ash small2">US EQUITY</div>
                     </Col>
                     </Row>
                  </Col>
               
              
     
    );
  }
  }
  
  export default Block1;