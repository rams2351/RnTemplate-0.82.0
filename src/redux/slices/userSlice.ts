import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "types";

const initialState: IUser = {
    user: null,
    counter: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: ({ state, payload }) => {
            state.user = payload
        },
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
    },
})