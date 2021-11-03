import { ADD_FAVORITE, DELETE_FAVORITE, toggleDisplay, TOGGLE_DISPLAY } from '../actions/favorites';
import movies from './../data.js';
import { connect } from 'react-redux';

const initialState = {
    favorites: [],
    toggleDisplay:false
}

const reduceFav = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_DISPLAY:
            return{
                toggleDisplay:!toggleDisplay   
            }
        case DELETE_FAVORITE:
            const parse = parseInt(action.payload)
            return {
                favorites: state.favorites.filter(item=>(parse !== item.id))
            }
        case ADD_FAVORITE:
            return{
                favorites:[...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

export default reduceFav;