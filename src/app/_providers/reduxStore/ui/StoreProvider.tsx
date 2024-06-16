'use client';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';

import { cityReducer } from '@/entities/city';

import { createReduxStore } from '../config/createReduxStore';

export const StoreProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        cityReducer,
    };

    const store = useMemo(() => createReduxStore<StateSchema>(rootReducers), []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
