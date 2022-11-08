import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
    //adds dummy key so there's no warning when reducers are empty
    posts: postsReducer
});