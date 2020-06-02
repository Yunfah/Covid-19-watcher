import React, { Component } from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';

class SearchCountries extends Component {

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

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderRegions(regions) {
    return Object.keys(regions).map(region => {
      let r = regions[region];
      return (
        <option key={region} value={region}>{r.name} </option>
      )
    })
  }

  onRegionChange(event) {
    let region = event.target.value;
    let regions = this.state.items.data.regions;

    console.log(regions[region]);
    this.props.countryFromChild(regions[region]);
    this.setState({currentRegion: region});
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
       return <p> is loading ... </p>
    } else {
      return (
        <div className="SearchCountries">
          <Form>
            <Form.Group controlId="rating">
              <h4 className="white-h">Search country</h4>

              <Form.Control as="select" defaultValue={'default'} onChange={this.onRegionChange.bind(this)}>
                <option value="default" disabled>Select option</option>
                {this.renderRegions(items.data.regions)}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      );
    }
  }
}

export default SearchCountries;
