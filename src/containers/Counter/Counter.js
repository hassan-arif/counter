import React, { Component } from 'react'
import { connect } from 'react-redux' // joins state with that particular component (HOC is wrapped in it)
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import CounterControl from '../../components/CounterControl/CounterControl'

export class Counter extends Component {
  state = {
    counter: 0,
    history:[]
  }

  counterChangedHandler = value => {
    this.setState(prevState => {
        return {
            counter: prevState.counter + value
        }
    })
  }

  storeValue = () => {
    this.setState(prevState => {
        return {
            history: prevState.history.concat(prevState.counter)
        }
    })
  }

  deleteValue = id => {
    let arr = [...this.state.history]
    arr.splice(id, 1)
    this.setState({ 
        history: arr
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

        <button onClick={this.storeValue}>STORE</button>

        <ul>
            {this.state.history.map((val, index) => {
                return <li onClick={() => this.deleteValue(index)}>{val}</li>
            })}
        </ul>

      </div>
    )
  }
}

export default Counter