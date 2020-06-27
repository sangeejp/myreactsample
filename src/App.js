import React, { Component} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './App.css';
import {  Container, Row, Col, Jumbotron,ProgressBar,Button } from 'react-bootstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      chartes: [
        {
       id:1,
       name:'AADR',
       quantity:430,
       price:50.30,
       avg_cost:41.75,
       invest_cost:17952.07,
       portfolio_percent:22.06,
       unrealized_pl:3676.93,
       return_percent:20.48
      },
      {
        id:2,
        name:'MFEM',
        quantity:210,
        price:23.20,
        avg_cost:22.50,
        invest_cost:4725.84,
        portfolio_percent:5.81,
        unrealized_pl:146.16,
        return_percent:3.09
       },
       {
        id:3,
        name:'JPEM',
        quantity:328,
        price:52.50,
        avg_cost:56.70,
        invest_cost:18597.60,
        portfolio_percent:22.86,
        unrealized_pl:1377.60,
        return_percent:7.41
       },
       {
        id:4,
        name:'KEMQ',
        quantity:801,
        price:20.40,
        avg_cost:22.24,
        invest_cost:17811.04,
        portfolio_percent:21.89,
        unrealized_pl:1470.64,
        return_percent:-8.26
       },
       {
        id:5,
        name:'KLDW',
        quantity:523,
        price:32.90,
        avg_cost:26.32,
        invest_cost:13765.36,
        portfolio_percent:16.92,
        unrealized_pl:3441.34,
        return_percent:25.00
       },
       {
        id:6,
        name:'KOIN',
        quantity:335,
        price:25.40,
        avg_cost:25.40,
        invest_cost:8509.00,
        portfolio_percent:10.46,
        unrealized_pl:-1,
        return_percent:0.00
       },
  
    ],
    total_mf:0,
    total_ef:0
  };
  // this.state.total_mf=this.state.chartes[0].portfolio_percent+this.state.chartes[1].portfolio_percent+this.state.chartes[2].portfolio_percent;
  // this.state.total_ef=this.state.chartes[4].portfolio_percent+this.state.chartes[5].portfolio_percent+this.state.chartes[6].portfolio_percent;
  }
  render() {
    
    return (
 
    <Container fluid className="App">
    <Jumbotron>
     
        {
          this.state.chartes.map(charts=>  <Row key={charts.id}>
            <Col md="8" className="content-wrapper">
              <Row>
                <Col md="3" className="infobox">
                <Row>
                   <Col md="1" ><i className="fa fa-bars"></i></Col>
                   <Col md="3"  className="text-center"><span className="ash ash2">{charts.name}</span>
                  <div className="bluediv "><span className="bigger ash">$</span>
          <span className="bigger blue">{charts.price}</span></div>
                   </Col>
                   <Col md="7" >
                     <div className="bigger ishares">iShares</div>
                     <div className="smaller"> by BlackRocx</div>
                     <div className="bolder bold2"> S&P 500 INDEX</div>
                     <div className="ash small2">US EQUITY</div>
                   </Col>
                   </Row>
                </Col>
                <Col md="2" className="infobox">
                <Row className="ash2">
                   <Col md="1" className="paddright0" ><i className="fa fa-database"></i></Col>
                   <Col md="6"  className="paddright0">
                     <span >Quantity</span>
              
                   </Col>
                   <Col md="2" className="paddright0">
          <div className="black ">{charts.quantity}</div>
                   
                   </Col>
                   </Row>
                   <Row className="ash2">
                   <Col md="1" className="paddright0"><i className="fa fa-at"></i></Col>
                   <Col md="6"  className="paddright0">
                     <span className="paddright0">Avg. Cost</span>
              
                   </Col>
                   <Col md="2" >
          <div className="black ">${charts.avg_cost}</div>
                   
                   </Col>
                   </Row>
                   <Row className="ash2">
                   <Col md="1" className="paddright0"><i className="fa fa-money"></i></Col>
                   <Col md="6"  className="paddright0">
                     <span className="paddright0">Invested Amt.</span>
              
                   </Col>
                   <Col md="2" >
          <div className="black ">${charts.avg_cost}</div>
                   
                   </Col>
                   </Row>
                </Col>

                <Col md="2" className="infobox">
                <Row className="ash2">
                   <Col md="12" className="paddright0 black" >Market Value <span className="pull-right padding-right-15">${charts.price*charts.quantity}</span> </Col>
                   <Col md="12"  className="paddright0">% of Portfolio value 
          <span className="pull-right padding-right-15">{charts.portfolio_percent}%</span>
              
                   </Col>
                   <Col md="12" className="paddingtop5">
                   <ProgressBar now={charts.portfolio_percent} />
                   
                   </Col>
                   </Row>
                   
                </Col>
                <Col md="2" className="infobox">
                <Row className="ash2">
                   <Col md="12" className="paddright0 black" >Unrealized P/L
                    <span className="pull-right padding-right-15">${charts.unrealized_pl}</span> </Col>
                   <Col md="12"  className="paddright0">% of Return 
          <span className="pull-right padding-right-15">{charts.return_percent}%</span>
              
                   </Col>
                   <Col md="12" className="paddingtop5">
                   <input type="range" id="vol" name="vol" className="slider" min="0" value={charts.return_percent} max="100" />
                   
                   </Col>
                   </Row>
                   
                </Col>
                
                <Col md="2" className="infobox2 text-center">
                <Row className="ash2 ">
                  
                <Col md="12" className=""> 
                   <Button variant="outline-warning">BUY</Button> 
                   
                   </Col>
                   <Col md="12" className="paddingtop5"> 
                   <Button variant="outline-warning">SELL</Button> 
                   
                   </Col>
                   </Row>
                   
                </Col>
                
                {/* <input type="range" id="vol" name="vol" min="0" max="50"> */}
              </Row>
      
            </Col>
            <Col md="3" className="content-wrapper">
              <div className="paddingtop0 bolder">Portfolio 
              <span className="pull-right"><select className="myselect"><option value="asset wise">Asset Wise</option></select></span>
              </div>
              <PieChart
             style={{ height: '100px' }}
             lineWidth={40} rounded 
  data={[
    { title: 'One', value:  (this.state.chartes[0].portfolio_percent+this.state.chartes[1].portfolio_percent+this.state.chartes[2].portfolio_percent), color: '#E38627' },
    { title: 'Two', value:(this.state.chartes[3].portfolio_percent+this.state.chartes[4].portfolio_percent+this.state.chartes[5].portfolio_percent), color: '#C13C37' },
   
  ]}
/></Col>
            </Row> )
        }
        
    </Jumbotron>
  </Container>
            
   
  );
}
}

export default App;
