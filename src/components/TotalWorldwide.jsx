import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TotalWorldwide() {

  return (

    <div className="TotalWorldwide">
      <h3 className="white-h">Worldwide</h3>
        <Card>
          <Card.Body>
            <h2>123456789</h2>
            <Card.Text>
              TOTAL CASES
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                <h6>1234567</h6>
<p>Recovered</p>
              </Col>
              <Col>
                <h6>1234567</h6>
          <p>Active cases</p>
              </Col>
              <Col>
<h6>1234567</h6>
          <p>Deaths</p>
              </Col>

        </Row>
          </Card.Footer>
        </Card>


    </div>
    );
}

export default TotalWorldwide;
