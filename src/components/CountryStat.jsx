import React, { Component } from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class CountryStat extends Component {

  render() {
    return (
      <div className="CountryStat">

        <Card>
          <Card.Body>
            <Row>

              <Col><Card.Title >{this.props.countryInfo.name}</Card.Title></Col>
              <Col><span className="dataNum">{this.props.countryInfo.total_cases}</span></Col>
              <Col><span className="dataNum">{this.props.countryInfo.active_cases}</span></Col>
              <Col><span className="dataNum">{this.props.countryInfo.deaths}</span></Col>

            </Row>
          </Card.Body>
        </Card>

      </div>
    );
  }
}
export default CountryStat;

