import { ThunkAction } from '@/app/_providers/reduxStore';

import { cities, randomTime } from '../../mock/mock';
import { activeCitiesSelector } from '../selectors/selectors';
import { cityActions } from '../slice/city';
import { getCurrentCities } from '../../utils/getCurrentCities';

export const aiFunction = (): ThunkAction => async (dispatch, getState) => {
    const activeCities = activeCitiesSelector(getState());

    const currentCities = getCurrentCities({ activeCities });

    const answer = currentCities
        ? currentCities.find((city) => !activeCities.includes(city))
        : null;

    const randomSeconds = randomTime[Math.floor(Math.random() * randomTime.length)];
    setTimeout(() => {
        if (answer) {
            dispatch(cityActions.addActiveCity(answer));
        } else {
            dispatch(cityActions.setWinnerStatus(true));
        }
    }, randomSeconds);
};
