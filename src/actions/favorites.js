export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";

export const deleteFavorite = (id)=>{
    return({type: DELETE_FAVORITE, payload:id});
}
export const addFavorite = (id) => {
    return({type: ADD_FAVORITE, payload:id})
}