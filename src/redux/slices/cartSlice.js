import { createSlice } from "@reduxjs/toolkit";



const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //function to add items into cart
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        //function to delete items from crat
        removeFromCart:(state,action)=>{
          return  state.filter(item=>item.id!=action.payload)

        },
        //fn to remove all items 
        emptyCart:(state)=>{
            return state=[]
        }

    }
})

export const{addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer