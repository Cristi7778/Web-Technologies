import { configureStore } from "@reduxjs/toolkit";
import conferencesReducer from "../reducers/conferences-reducer";

export default configureStore({
    reducer: conferencesReducer
});