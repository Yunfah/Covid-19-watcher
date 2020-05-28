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
    country: []
  };
  // gör så att country är i en array
  parentFunction = (country) => {
    this.setState(country);
  }

 render() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Covid-19 watcher</h1>
    </header>
    <Container>
      <Row>

        <Col lg={{span: 6, order: 1}} xs={{ span: 12, order: 2 }}>
          <RecentList />
        </Col>
        <Col lg={{span: 4, order: 3, offset: 2}} xs={{ span: 12, order: 1 }}>
          <TotalWorldwide/>
          <SearchCountries countryFromChild={this.parentFunction} />
        </Col>


      </Row>
    </Container>
  </div>);
 }

}



export default App;
