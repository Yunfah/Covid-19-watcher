import React, {Component} from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class TotalWorldwide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            currentRegion: '',
        }
    }

    componentDidMount() {
        fetch("https://api.quarantine.country/api/v1/summary/latest")
          .then(res => res.json())
          .then(
            json => {
              this.setState({
                isLoaded: true,
                items: json,

              });

            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }




    render() {

        var { isLoaded, items} = this.state;

        if (!isLoaded) {
            return <h3 className="white-h">Loading ... </h3>
        }
        else {
            return (
              <div className="TotalWorldwide">

                  <h3 className="white-h">Worldwide</h3>
                    <Card>
                      <Card.Body>
                        <h1>{items.data.summary.total_cases}</h1>
                        <Card.Text>
                          TOTAL CASES
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Row>
                          <Col>
                            <span className="dataNum">{items.data.summary.active_cases}</span>
                      <p>Active cases</p>

                          </Col>
                          <Col>
                            <span className="dataNum">{items.data.summary.recovered}</span>
            <p>Recovered</p>
                          </Col>
                          <Col>
            <span className="dataNum">{items.data.summary.deaths}</span>
                      <p>Deaths</p>
                          </Col>
                    </Row>
                      </Card.Footer>
                    </Card>
                </div>


            );
        }

    }
}





export default TotalWorldwide;
