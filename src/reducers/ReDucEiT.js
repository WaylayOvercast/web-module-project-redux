import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/favorites';
import movies from './../data.js';

const initialState = {
    favorites: [],
    displayFav: false
}

const reduceFav = (state = initialState, action) => {
    switch(action.type) {
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