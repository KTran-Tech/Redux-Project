

//'actionTypes' becomes an object that you can search through with 'actionType.property'
import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
                return{
//.concat() is like .push() but it is an immutable way of creating a new array which is what we want
                    ...state,//"pushing" in the state.counter value to results array
                    results: state.results.concat({id: Date.now(), value: state.counter})
                }       
        case actionTypes.DELETE_RESULT:
            //'filter' loops through the current array and returns a new array
            /*If each object has an id NOT equal to the clicked id, then return TRUE, meaning
            it should keep existing, else if FALSE, then remove it from the newly created array*/
                const updatedArray = state.results.filter(result => result.id !== action.resultElId);
                return {
                    ...state,
                    results: updatedArray
                }    
        }
        //returning the NEW state to Counter.js 
        return state;         
    }




export default reducer;
