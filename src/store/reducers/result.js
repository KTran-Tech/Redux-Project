

//'actionTypes' becomes an object that you can search through with 'actionType.property'
import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE_RESULT:
                return{
//.concat() is like .push() but it is an immutable way of creating a new array which is what we want
                    ...state,//"pushing" in the newly created OBJECT to results array
                    results: state.results.concat({id: Date.now(), value: action.result})
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
