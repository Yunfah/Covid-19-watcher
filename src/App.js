import React, {Component} from 'react';
import './App.css';
import TotalWorldwide from './components/TotalWorldwide';
import RecentList from './components/RecentList';
import SearchCountries from './components/SearchCountries';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class App extends Component {
  state = {
    country: [
      {name: " ", total_cases: " ", active_cases: " ",deaths: " "},
    ]

  };
  // gör så att country är i en array
  parentFunction = (country) => {
    const countryInfo = {name: country.name, total_cases: country.total_cases, active_cases: country.active_cases, deaths: country.deaths}

    this.setState({country: countryInfo});
  }

 render() {
  return (
    <div className="App">
    <header className="App-header">
      <h1><span role="img" aria-label="microbe-emoji">&#129440;</span> COVID-19 WATCHER</h1>
    </header>
    <Container>
      <Row>
        <Col lg={{span: 6, order: 1}} xs={{ span: 12, order: 2 }}>
          <RecentList toChild = {this.state.country}/>
        </Col>

        <Col lg={{span: 4, order: 2, offset: 2}} xs={{ span: 12, order: 1 }}>
          <TotalWorldwide/>
          <SearchCountries countryFromChild={this.parentFunction} />
        </Col>
      </Row>
    </Container>
  </div>);
 }

}



export default App;
