import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams, useHistory} from 'react-router-dom';
import { deleteFavorite } from '../actions/favorites'


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    const { id } = useParams();
    const removeFavorite=(id)=>{
        deleteFavorite(id)    
    }
    console.log(favorites)
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.length > 0 && 
                favorites.map(arr=> arr.map(movie => {
                    console.log('MOVVVVIE',movie)
                    return <div key={movie.id}>
                        <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                            {movie.title}
                            <span><span className="material-icons" onClick={()=>removeFavorite(id)}>remove_circle</span></span>
                        </Link> 
                    </div>
                }))
            
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.fav.favorites
    }
}


export default connect(mapStateToProps, {deleteFavorite}) (FavoriteMovieList);