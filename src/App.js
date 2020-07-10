import React, { Component} from 'react';

import './App.css';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Block5 from './Block5';
import Block6 from './Block6';
import {  Container, Row, Col, Jumbotron } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props.chartes[0]);
    this.state=props.chartes[0];
  //   this.state={
  //     chartes: [
  //       {
  //      id:1,
  //      name:'AADR',
  //      quantity:430,
  //      price:50.30,
  //      avg_cost:41.75,
  //      invest_cost:17952.07,
  //      portfolio_percent:22.06,
  //      unrealized_pl:3676.93,
  //      return_percent:20.48
  //     },
  //     {
  //       id:2,
  //       name:'MFEM',
  //       quantity:210,
  //       price:23.20,
  //       avg_cost:22.50,
  //       invest_cost:4725.84,
  //       portfolio_percent:5.81,
  //       unrealized_pl:146.16,
  //       return_percent:3.09
  //      },
  //      {
  //       id:3,
  //       name:'JPEM',
  //       quantity:328,
  //       price:52.50,
  //       avg_cost:56.70,
  //       invest_cost:18597.60,
  //       portfolio_percent:22.86,
  //       unrealized_pl:1377.60,
  //       return_percent:7.41
  //      },
  //      {
  //       id:4,
  //       name:'KEMQ',
  //       quantity:801,
  //       price:20.40,
  //       avg_cost:22.24,
  //       invest_cost:17811.04,
  //       portfolio_percent:21.89,
  //       unrealized_pl:1470.64,
  //       return_percent:-8.26
  //      },
  //      {
  //       id:5,
  //       name:'KLDW',
  //       quantity:523,
  //       price:32.90,
  //       avg_cost:26.32,
  //       invest_cost:13765.36,
  //       portfolio_percent:16.92,
  //       unrealized_pl:3441.34,
  //       return_percent:25.00
  //      },
  //      {
  //       id:6,
  //       name:'KOIN',
  //       quantity:335,
  //       price:25.40,
  //       avg_cost:25.40,
  //       invest_cost:8509.00,
  //       portfolio_percent:10.46,
  //       unrealized_pl:-1,
  //       return_percent:0.00
  //      },
  
  //   ],
  //   total_mf:0,
  //   total_ef:0
  // };
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
                <Block1 charts={charts} />
                <Block2 charts={charts} />
                <Block3 charts={charts} />
                <Block4 charts={charts} />
                <Block5  />
                {/* <input type="range" id="vol" name="vol" min="0" max="50"> */}
              </Row>
      
            </Col>
            <Block6 state={this.state}/>
            </Row> )
        }
        
    </Jumbotron>
  </Container>
            
   
  );
}
}

export default App;
