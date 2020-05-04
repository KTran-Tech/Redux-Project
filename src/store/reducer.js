
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INCREMENT':
            return{
/*spreading out all the data from the initial state object*/
//returning the UPDATED version of the state object and overriding the old one 
                    ...state,
                    counter: state.counter + 1 
            }
        case 'DECREMENT':
                return{
                    ...state,
                    counter: state.counter - 1 
                }
        case 'ADD':
            return{
                    ...state,
                    counter: state.counter + action.val
            }
        case 'SUBTRACT':
                return{
                    ...state,
                    counter: state.counter - action.val
                }
        case 'STORE_RESULTS':
                return{
//.concat() is like .push() but it is an immutable way of creating a new array which is what we want
                    ...state,
                    results: state.results.concat(state.counter)
                }       
        }
        return state;         
    }




export default reducer;
