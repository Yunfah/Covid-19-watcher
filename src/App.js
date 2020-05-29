import React, {Component} from 'react';
import './App.css';
import TotalWorldwide from './components/TotalWorldwide';
import RecentList from './components/RecentList';
import SearchCountries from './components/SearchCountries';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Api from './components/Api';


class App extends Component {
  state = {
    items: []
  };

  toParent = (api) => {
    this.setState({items: api })
  }

 render() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Covid-19 watcher</h1>
    </header>
    <Container>
      <Row>

        <Col xl={{span: 6, order: 1}} xs={{ span: 12, order: 2 }}>
          <RecentList />
        </Col>
        <Col xl={{span: 4, order: 2, offset: 2}} xs={{ span: 12, order: 1 }}>
          <TotalWorldwide />
          <SearchCountries />
        </Col>


      </Row>

      <Api toParent ={this.toParent}/>
    </Container>
  </div>);
 }

}



export default App;
