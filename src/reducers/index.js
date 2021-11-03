import { combineReducers } from 'redux';
import reduceFav from './ReDucEiT'
import reducer from './movieReducer';


const combine = combineReducers({
    fav: reduceFav,
    films: reducer  
})


export default combine;