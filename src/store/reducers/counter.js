

//'actionTypes' becomes an object that you can search through with 'actionType.property'
import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREMENT:
            return{
/*spreading out all the data from the initial state object*/
//returning the UPDATED version of the state object and overriding the old one 
                    ...state,
                    counter: state.counter + 1 
            }
        case actionTypes.DECREMENT:
                return{
                    ...state,
                    counter: state.counter - 1 
                }
        case actionTypes.ADD:
            return{
                    ...state,
                    counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
                return{
                    ...state,
                    counter: state.counter - action.val
                }

        }
        //returning the NEW state to Counter.js 
        return state;         
    }




export default reducer;
