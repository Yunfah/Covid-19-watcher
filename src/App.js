import React from 'react';
import './App.css';
import TotalWorldwide from './components/TotalWorldwide';
import HighlightCountry from './components/HighlightCountry';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is page is for Covid-19 watcher</h1>
      </header>
      <Container>

        <Row>
          <Col xs={6}>
          <TotalWorldwide />
        </Col>
          <Col xs={2}></Col>
          <Col xs={4}>
            <HighlightCountry />
          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default App;
