import { combineReducers } from "redux";

export default combineReducers({
    //adds dummy key so there's no warning when reducers are empty
    replaceMe: () => 10
});