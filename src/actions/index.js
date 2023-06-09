import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch, getState) => {

        const response = await jsonPlaceHolder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
}

export const fetchUser = id => async dispatch => {

    _fetcUser(id, dispatch);

}

const _fetcUser = _.memoize(async (id, dispatch) => {

    const response = await jsonPlaceHolder.get(`./users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });

});