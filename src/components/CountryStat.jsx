import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CountryStat() {

  return (
<div className="CountryStat">

<Card>
    <Card.Body>
      <Row>

      <Col><Card.Title >Country</Card.Title></Col>
      <Col><h5 className="dataNum">5950328</h5></Col>
      <Col><h5 className="dataNum">5950328</h5></Col>
      <Col><h5 className="dataNum">5950328</h5></Col>

      </Row>
    </Card.Body>
  </Card>

</div>
);
}

export default CountryStat;
