import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CitySchema } from '../types/types';

const initialState: CitySchema = {
    activeCities: [],
    winnerStatus: null,
};

const slice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setActiveCities: (state, action: PayloadAction<string[]>) => {
            state.activeCities = action.payload;
        },
        addActiveCity: (state, action: PayloadAction<string>) => {
            state.activeCities.push(action.payload);
        },
        setWinnerStatus: (state, action: PayloadAction<boolean | null>) => {
            state.winnerStatus = action.payload;
        },
    },
});

export const {
    actions: cityActions,
    reducer: cityReducer,
} = slice;
