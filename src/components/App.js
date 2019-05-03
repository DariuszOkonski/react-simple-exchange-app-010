import React from 'react';
import './App.css';
import Header from './Header';
import ControlData from './ControlData';

class App extends React.Component {

  static defaultProps = {
    currencies: [
      { id: 0, name: 'zloty', ratio: 1, title: 'Amount Polish curriency:' },
      { id: 1, name: 'dollar', ratio: 3.6, title: 'Amount USA curriency:' },
      { id: 2, name: 'euro', ratio: 4.1, title: 'Amount EU curriency:' },
      { id: 3, name: 'pound', ratio: 4.55, title: 'Amount UK curriency:' },
    ],
    prices: [
      { id: 0, name: 'electricity', price: .51, unit: 'kWh' },
      { id: 1, name: 'gas', price: 4.76, unit: 'liters' },
      { id: 2, name: 'oranges', price: 3.79, unit: 'kilos' },
      { id: 3, name: 'coal', price: 589.93, unit: 'tons' },
    ]
  }

  render() {
    return (
      <div className="app">
        <Header />
        <ControlData
          prices={this.props.prices}
          currencies={this.props.currencies}
        />
      </div>
    );
  }
}

export default App;