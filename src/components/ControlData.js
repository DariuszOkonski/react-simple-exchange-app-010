import React from 'react';
import Cash from './Cash';

class ControlData extends React.Component {
  state = {
    price: 0,
    quantity: 0,
  }

  handleChangeInput = (e) => {
    if (e.target.value >= 0) {
      this.setState({
        quantity: Number(e.target.value),
      })
    }
  }

  handleChangeSelect = (e) => {
    this.setState({
      price: Number(e.target.value),
      quantity: 0,
    })
  }

  componentDidMount() {
    this.setState({
      price: this.props.prices[0].price,
    })
  }

  displayUnit = () => {
    const elements = [...this.props.prices];
    const unit = elements.find(el => el.price === this.state.price);
    return unit.unit;
  }

  render() {
    const displayData = this.props.prices.map(element => {
      return (<option key={element.id} value={element.price}>{element.name}</option>)
    })

    const displayCurriencies = this.props.currencies.map(element =>
      <Cash key={element.id} curriency={element} price={this.state.price} quantity={this.state.quantity} />);

    return (
      <div className="control-data" >
        <label htmlFor="">
          Choose produkt:
        <select onChange={this.handleChangeSelect}>
            {displayData}
          </select>
        </label>

        <div>
          <input
            type="number"
            value={this.state.quantity}
            onChange={this.handleChangeInput}
          /><span>{this.state.quantity ? this.displayUnit() : null}</span>
        </div>

        {this.state.quantity ? displayCurriencies : null}
      </div>
    );
  }
}

export default ControlData;