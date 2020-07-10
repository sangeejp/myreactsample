import React, { Component} from 'react';
import {   Row, Col } from 'react-bootstrap';
class Block4 extends Component {
   
    render() {
      
      return (
   
      
        <Col md="2" className="infobox">
        <Row className="ash2">
           <Col md="12" className="paddright0 black" >Unrealized P/L
            <span className="pull-right padding-right-15">${this.props.charts.unrealized_pl}</span> </Col>
           <Col md="12"  className="paddright0">% of Return 
  <span className="pull-right padding-right-15">{this.props.charts.return_percent}%</span>
      
           </Col>
           <Col md="12" className="paddingtop5">
           <input type="range" id="vol" name="vol" className="slider" min="0" value={this.props.charts.return_percent} max="100" />
           
           </Col>
           </Row>
           
        </Col>
       
              
     
    );
  }
  }
  
  export default Block4;