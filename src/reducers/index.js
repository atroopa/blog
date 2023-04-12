import { combineReducers } from "redux";
import postsReducers from './PostsReducers';
import UsersReducers from "./UsersReducers";


export default combineReducers({
    posts: postsReducers,
    user: UsersReducers
});