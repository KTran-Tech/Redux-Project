

//'actionTypes' becomes an object that you can search through with 'actionType.property'
import * as actionTypes from '../actions/actionTypes';

//import in a function from 'utility'
import {updateObject} from '../utility'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
//e.g INCREMENT, below if the type passed in is indeed actionTypes.property-->value, then do that case
    switch (action.type) {

        case actionTypes.INCREMENT:
            //passing in the old state and the new state arguments
            return updateObject(state, {counter: state.counter + 1})
        case actionTypes.DECREMENT:
            //passing in the old state and the new state arguments
            return updateObject(state, {counter: state.counter - 1})
        case actionTypes.ADD:
            //passing in the old state and the new state arguments
            return updateObject(state, {counter: state.counter + action.val})
        case actionTypes.SUBTRACT:
            //passing in the old state and the new state arguments
            return updateObject(state, {counter: state.counter - action.val})

        }
        //returning the NEW state to Counter.js 
        return state;         
    }




export default reducer;
