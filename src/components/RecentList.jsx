import React, { Component } from 'react';
import './styles.css';
import CountryStat from './CountryStat';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class RecentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
    }
  }

  render() {
    return (<div className="RecentList">
      <h3 className="white-h">Recently searched</h3>
      <Card id="card-text-h">
        <Card.Body>
          <Row>
            <Col>
              <h6 className="white-h">Country</h6>
            </Col>
            <Col>
              <h6 className="white-h">Total cases</h6>
            </Col>
            <Col>
              <h6 className="white-h">Active cases</h6>
            </Col>
            <Col>
              <h6 className="white-h">Deaths</h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>


      <CountryStat />

      <CountryStat />

    </div>);

  }


}

export default RecentList;
