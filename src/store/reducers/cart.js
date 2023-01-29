const defaultState = [];

const ADD_TO_CART = "ADD_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const CART_INCREMENT = "CART_INCREMENT";
const CART_DECREMENT = "CART_DECREMENT";
const DELETE_FROM_BUSKET = "DELETE_FROM_BUSKET";

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const clearCart = payload => ({ type: CLEAR_CART, payload });
export const cartIncrement = payload => ({ type: CART_INCREMENT, payload });
export const cartDecrement = payload => ({ type: CART_DECREMENT, payload });
export const deleteFromBusket = payload => ({ type: DELETE_FROM_BUSKET, payload });

const checkProduct = (state, payload) => {
    const product_in_state = state.find(el => el.id == payload.id);
    if(product_in_state){
        product_in_state.count++
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}

export const cartReducer = (state = defaultState, action) => {
    if(action.type === ADD_TO_CART){
        return checkProduct(state, action.payload)
    } else if(action.type === CLEAR_CART){
        return defaultState
    } else if(action.type === CART_INCREMENT){
        state.find(el => el.id === action.payload).count++
        return [...state]
    } else if(action.type === CART_DECREMENT){
        const target_cart = state.find(el => el.id === action.payload);
        if(target_cart.count === 1){
            state = state.filter(el => el.id !== action.payload)
        } else {
            target_cart.count--
        }
        return [...state];
    } else if(action.payload === DELETE_FROM_BUSKET){
        return state.filter(el => el.id !== action.payload)
    } else {
        return state
    }
}