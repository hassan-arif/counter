import React, { Component } from 'react'
import { connect } from 'react-redux' // joins state with that particular component (HOC is wrapped in it)
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import CounterControl from '../../components/CounterControl/CounterControl'

export class Counter extends Component {

/*
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
*/

  render() {
    return (
      <div>
{/*         
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
*/}

        <CounterOutput value={this.props.ctr} />

        <CounterControl label='Increment' clicked={this.props.inc}/>
        <CounterControl label='Decrement' clicked={this.props.dec}/>
        <CounterControl label='Add 5' clicked={() => this.props.change(5)}/>
        <CounterControl label='Subtract 5' clicked={() => this.props.change(-5)}/>
        <br />

        <button onClick={this.props.save}>STORE</button>

        <ul>
            {this.props.storedResults.map((val, index) => {
                return <li onClick={() => this.props.delete(index)}>{val}</li>
            })}
        </ul>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        inc: () => dispatch({type: 'INCREMENT'}),
        dec: () => dispatch({type: 'DECREMENT'}),
        change: val => dispatch({type: 'CHANGE_BY', value: val}),
        save: () => dispatch({type :'STORE'}),
        delete: index => dispatch({type: 'DELETE', id: index})
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.history
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)