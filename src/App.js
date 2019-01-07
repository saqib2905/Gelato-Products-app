import React, { Component } from 'react';
import { fetchData } from './util/service'; 
import Form from './components/Form'
import ProductDetails from './components/ProductDetails';
import './App.css';

const defaultState = {
  isLoading: false,
    prodUid: null,
    shipments: []
};
class App extends Component {
  state = defaultState;

  loadData = () =>{
    this.setState({isLoading: true});
    this.subscription = fetchData(this.state.prodUid).then(res => {
      console.log('res', res.data.production)
      this.setState({
        isLoading : false,
        shipments: res.data.production.shipments
      });
    })
  }

  handleChange = event => {
    this.setState({ prodUid: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.loadData();
  };
  
  render() {
    return (
      <div>
        <Form 
          requestData= {this.handleSubmit}
          onChange= {this.handleChange}
        />
      {
        this.state.isLoading ?
          <div> Loading........</div>
          : this.state.shipments.map((item, index) =>
            <ProductDetails 
              name= {item.name}
              price={item.price}
              delDate={item.maxDeliveryDate}
              key={index}
            />)
      }
      </div>
    )
  }
}

export default App;

