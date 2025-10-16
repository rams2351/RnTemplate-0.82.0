import { persistedReducer } from '@redux/reducer';
import { rootSaga } from '@redux/saga';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Persistor, persistStore } from 'redux-persist';
const createSagaMiddleware = require('redux-saga').default;

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // serializableCheck: {
        //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
        serializableCheck: false,
        immutableCheck: false,
    }).concat(sagaMiddleware),
})

export const persistor: Persistor = persistStore(store);

sagaMiddleware.run(rootSaga);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();