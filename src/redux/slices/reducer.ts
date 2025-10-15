import { userSlice } from "@redux/slices/userSlice";
import { combineReducers } from "redux";

export const combinedReducer = combineReducers({
    user: userSlice.reducer
});

export const actions = {
    ...userSlice.actions
};

