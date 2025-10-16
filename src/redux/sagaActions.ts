// SAGA ACTIONS 

import { createAction } from "@reduxjs/toolkit";

export const sagaActions = {
    // AUTH
    callLogin: createAction<{ username: string, password: string }>("callLogin"),
}