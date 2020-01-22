


export const initialState={
    part:"test",
    price:1000
} 
export const addReducer =(state=initialState,action) => {
    console.log(state,action);
}