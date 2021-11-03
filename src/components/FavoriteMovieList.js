import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams, useHistory} from 'react-router-dom';
import { deleteFavorite } from '../actions/favorites'


const FavoriteMovieList = (props) => {
    const favorites = [];
    const { id } = useParams();
    const removeFavorite=(id)=>{
        deleteFavorite(id)    
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={()=>removeFavorite(id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps=state=>{
    return state.fav
}

export default connect(mapStateToProps, {deleteFavorite}) (FavoriteMovieList);