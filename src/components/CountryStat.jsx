import React, { Component } from 'react';
import './styles.css';
import CountUp from 'react-countup';
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
              <Col><h5><CountUp duration={0.0001} separator=" " end={this.props.countryInfo.total_cases} /></h5></Col>
              <Col><h5><CountUp duration={0.0001} separator=" " end={this.props.countryInfo.active_cases}/></h5></Col>
              <Col><h5><CountUp duration={0.0001} separator=" " end={this.props.countryInfo.deaths}/></h5></Col>
            </Row>
          </Card.Body>
        </Card>

      </div>
    );
  }
}
export default CountryStat;
