import { ThunkAction } from '@/app/_providers/reduxStore';

import { randomTime } from '../../mock/mock';
import { getCurrentCities } from '../../utils/getCurrentCities';
import { activeCitiesSelector, winnerStatusSelector } from '../selectors/selectors';
import { cityActions } from '../slice/city';

export const aiFunction = (): ThunkAction => async (dispatch, getState) => {
    const activeCities = activeCitiesSelector(getState());
    const winnerStatus = winnerStatusSelector(getState());

    const currentCities = getCurrentCities({ activeCities });

    const answer = currentCities
        ? currentCities.find((city) => !activeCities.includes(city))
        : null;

    const randomSeconds = randomTime[Math.floor(Math.random() * randomTime.length)];
    const timer = setTimeout(() => {
        if (answer) {
            dispatch(cityActions.addActiveCity(answer));
        } else {
            dispatch(cityActions.setWinnerStatus(true));
        }
    }, randomSeconds);

    if (typeof winnerStatus === 'boolean') { // очистка таймера если победитель определен
        clearTimeout(timer);
    }
};
