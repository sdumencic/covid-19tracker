import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import './App.css'
import {fetchData} from './api';
import corona from './images/corona2.png'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {
    if(country === 'global') {
      country = '';
    }

    const fetchedData = await fetchData(country);

    this.setState({data: fetchedData, country: country});
  }

  render() {
    const {data, country} = this.state;

  return (
    <div className="container">
    <img className="image" src={corona} alt="corona logo"/>
    <div className="bg"></div>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
  }
}

export default App;
