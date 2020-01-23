import {combineReducers} from 'redux'

const tstReducer =() =>{
    return [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

const addedReducer =(addedFeature=[],action)=>{
    if(action.type === 'ADD_FEATURE'){
     
   
        return action.payload
    }
    return addedFeature
}

export default combineReducers({
    features:tstReducer,
    added:addedReducer
})

{/*const addedReducer =(addedFeature=initialState,action)=>{
    switch(action.type){
        case 'ADD_FEATURE' :
            return {
                ...addedFeature, features:[...addedFeature.parts,{part:action.payload}]
            }
     
        default:
        return addedFeature
    }
    return addedFeature
} */}