import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                     <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>                       
                    ))}
                </ul>
            </div>
        );
    }
}


//pass in current state and returns newly replicated state
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}


/* To visualize this better, look at it like this 
mapDisptchToProps({type: 'SUBTRACT', val:10})
*/
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD',val:10 }),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val:10}),
        onStoreResult: () => dispatch({type: 'STORE_RESULTS', }),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

