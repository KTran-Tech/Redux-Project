

//'actionTypes' becomes an object that you can search through with 'actionType.property'
import * as actionTypes from '../actions/actionTypes';

import {updateObject} from '../utility';

const initialState = {
    results: []
}


const deleteResult = (state, action) =>{
        //'filter' loops through the current array and returns a new array
        /*If each object has an id NOT equal to the clicked id, then return TRUE, meaning
        it should keep existing, else if FALSE, then remove it from the newly created array*/
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, {results: updatedArray})

    }

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE_RESULT : return updateObject(state, {results: state.results.concat({id: Date.now(), value: action.result})})
    
        case actionTypes.DELETE_RESULT : return deleteResult(state,action)
                
        }

        //returning the NEW state to Counter.js 
        return state;         
    }




export default reducer;
