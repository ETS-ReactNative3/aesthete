import * as actionTypes from '../actions/actionTypes';
import { updateObject }  from '../utility';

const initialState = {
    artworks: [],
    loading: false
}

const  fetchArtworksStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const fetchArtworksSuccess = (state, action) => {
    return updateObject(state, {
        artworks: action.artworks,
        loading: false
    });
};

const fetchArtworksFail = (state, action) => {
    return updateObject(state, {
        looading: false
    });
};

const addArtworkStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const addArtworkSuccess = (state, action) => {
    const newArtwork = updateObject(action.artworkData, {id: action.artworkId});
    return updateObject(state, {
        loading: false,
        purchased: true,
        artworks: state.artworks.concat(newArtwork)
    })
};

const addArtworkFailed = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARTWORKS_START:
            return fetchArtworksStart(state, action)
        case actionTypes.FETCH_ARTWORKS_SUCCESS:
            return fetchArtworksSuccess(state, action)
        case actionTypes.FETCH_ARTWORKS_FAIL:
            return fetchArtworksFail(state, action)
        case actionTypes.ADD_ARTWORK_START:
            return addArtworkStart(state, action)
        case actionTypes.ADD_ARTWORK_SUCCESS:
            return addArtworkSuccess(state, action)
        case actionTypes.ADD_ARTWORK_FAILED:
            return addArtworkFailed(state, action)
        default:
            return state
    }
};

export default reducer;
