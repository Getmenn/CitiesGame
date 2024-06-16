import { CitySchema } from '@/entities/city';

import { createReduxStore } from './createReduxStore';

interface RootState {
    cityReducer: CitySchema;
}
// interface AsyncState {
// }
export type StateSchema = RootState

export type AppDispatch = ReturnType<typeof createReduxStore<StateSchema>>['dispatch'];
export type ThunkAction = (dispatch: AppDispatch, getState: () => StateSchema) => void

// export interface ThunkConfig<T> {
//     rejectValue: T;
//     extra: ThunkExtraArg;
//     state: StateSchema;
// }
