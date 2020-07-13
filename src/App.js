import React, { Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Block5 from './Block5';
import Block6 from './Block6';
import {  Container, Row, Col, Jumbotron } from 'react-bootstrap';

const App =(props)=>(
  <Container fluid className="App">
    <Jumbotron>
     
        {
          props.chartes.map(charts=>  <Row key={charts.id}>
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
            <Block6 chartes={props.chartes}/>
            </Row> )
        }
        
    </Jumbotron>
  </Container>
);
const ConnectedApp =connect((state)=>{
  console.log(state.chartes[0].chartes);
  return{
    chartes:state.chartes[0].chartes
  };
})(App)

export default ConnectedApp;
