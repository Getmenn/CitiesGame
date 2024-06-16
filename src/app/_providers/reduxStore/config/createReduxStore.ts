import { Action, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager, ReduxStoreWithManager } from 'async-reducer-manager';

export function createReduxStore<StateSchema>(rootReducers: ReducersMapObject<StateSchema, Action<any>>) {
    const reducerManager = createReducerManager<StateSchema>(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
    }) as ReduxStoreWithManager<StateSchema>;

    store.reducerManager = reducerManager;

    return store;
}
