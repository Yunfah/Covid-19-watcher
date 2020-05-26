import React, { Component } from 'react';

class api extends Component {
    
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

    renderRegions(regions) {
      return Object.keys(regions).map(region => { 
        let r = regions[region];
        //console.log(r);
        return (
          <option key={region} value={region}>{r.name} </option>
        )
      })
    }

    onRegionChange(event) {
      let region = event.target.value;
      let regions = this.state.items.data.regions;

      console.log(regions[region]);
      this.setState({currentRegion: region})

    }

    renderRegion(){
      if(this.state.currentRegion !== '') {
        let region = this.state.currentRegion;
        let regions = this.state.items.data.regions;
        return <p>Antal fall: {regions[region].total_cases}</p>
      }
      return <p>Välj ett land</p>
    }


    render() {

        var { isLoaded, items} = this.state;

        if (!isLoaded) {
            return <div>Loading ... </div>
        }
        else {
            return (
                <div>

                  <select onChange={this.onRegionChange.bind(this)}>
                    {this.renderRegions(items.data.regions)}
                  </select>

                  {this.renderRegion()}



                  {/* Display Total Cases: {items.data.summary.total_cases} 
                  Display Total Deaths: {items.data.summary.deaths}  */}

                </div>
            );
        }
            

        
    }
}

export default api;