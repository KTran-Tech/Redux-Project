
export const increment = () =>{
    return{
        type: INCREMENT
    }
}


export const decrement = () =>{
    return{
        type: DECREMENT
    }
}


export const add = (value) =>{
    return{
        type: ADD,
        val: value
    }
}


export const subtract = (value) =>{
    return{
        type: SUBTRACT,
        val: value
    }
}



export const STORE_RESULT = (res) =>{
    return{
        type: STORE_RESULT,
        result: res
    }
}


export const DELETE_RESULT = (resElId) =>{
    return{
        type: DELETE_RESULT,
        resultElId: resElId
    }
}