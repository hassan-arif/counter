import React, { Component } from 'react'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import CounterControl from '../../components/CounterControl/CounterControl'

export class Counter extends Component {
  state = {
    counter: 0
  }

  counterChangedHandler = value => {
    this.setState({
        counter: this.state.counter + value
    })
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.state.counter} />

        <CounterControl label='Increment' clicked={() => this.counterChangedHandler(1)}/>
        <CounterControl label='Decrement' clicked={() => this.counterChangedHandler(-1)}/>
        <CounterControl label='Add 5' clicked={() => this.counterChangedHandler(5)}/>
        <CounterControl label='Subtract 5' clicked={() => this.counterChangedHandler(-5)}/>
        <br />

      </div>
    )
  }
}

export default Counter