import { sagaActions } from "@redux/sagaActions";
import { userSlice } from "@redux/slices/userSlice";
import { MMKVStorage } from "@services/StorageService";
import { combineReducers } from "redux";
import { PersistConfig, persistReducer } from "redux-persist";



const persistConfig: PersistConfig<any> = {
    key: 'root',
    version: 1,
    storage: MMKVStorage,
    whitelist: ['user']
}

export const rootReducer = combineReducers({
    user: userSlice.reducer
});

export const actions = {
    ...sagaActions,
    ...userSlice.actions
};


export const persistedReducer = persistReducer(persistConfig, rootReducer as any)
