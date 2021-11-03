import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteMovie } from '../actions/movieActions'
import { addFavorite } from '../actions/favorites'

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory('/movies');
    const movies = [...props.movies];
    const movie = movies.find(movie=>movie.id===Number(id));

    const removeMovie=(id)=>{
        props.deleteMovie(id)
        push('/movies')
    }
    const favoriteMovie =(identity)=>{

        const parse = parseInt(identity)
        const spec = props.movies.filter(movie => (parse === movie.id))
        props.addFavorite(spec)
        alert('this movie has been added to your favorites! :D')
        
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark"onClick={()=> favoriteMovie(id)}>Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" onClick={()=>removeMovie(id)} value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    console.log(state.fav.favorites)
    return {
        movies: state.films.movies
    }
}

export default connect(mapStateToProps, {deleteMovie, addFavorite}) (Movie);