import { combineReducers } from "redux";
import postsReducers from './PostsReducers';


export default combineReducers({
    posts: postsReducers
});