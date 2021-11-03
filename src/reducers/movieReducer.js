import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            const parse = parseInt(action.payload)
            return {
                movies: state.movies.filter(item=>(parse !== item.id))
            }
        case ADD_MOVIE:
            return{
                movies:[...state.movies, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;