import React, { Component } from 'react';
import './styles.css';
import CountryStat from './CountryStat';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class RecentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.toChild !== prevProps.toChild) {
      this.setState({ countries: [...this.state.countries, this.props.toChild] })
    }
  }

  showRecent(countries) {

    return Object.keys(countries).reverse().map(country => {
      let c = countries[country];
      return (

        <li key={country}>
          <CountryStat countryInfo={c} />
        </li>

      )
    })
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

      {this.showRecent(this.state.countries)}

<div id="btnWrapper">
 <Button id="clearBtn" variant="outline-light">Clear list</Button>
</div>
    </div>
  );

  }


}

export default RecentList;
