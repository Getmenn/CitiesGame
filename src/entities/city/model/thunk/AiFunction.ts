import { ThunkAction } from '@/app/_providers/reduxStore';

import { cities, randomTime } from '../../mock/mock';
import { activeCitiesSelector } from '../selectors/selectors';
import { cityActions } from '../slice/city';

export const aiFunction = (): ThunkAction => async (dispatch, getState) => {
    const activeCities = activeCitiesSelector(getState());
    const lastCity = activeCities.at(-1);
    if (!lastCity) return null;

    let lastLetter = lastCity.slice(-1);

    if (lastLetter === 'ь' || lastLetter === 'ы' || lastLetter === 'ъ') {
        lastLetter = lastCity.charAt(lastCity.length - 2);
    }

    const currentCities = cities.filter((city) => city.charAt(0).toLowerCase() === lastLetter);
    const answer = currentCities.find((city) => !activeCities.includes(city));

    const randomSeconds = randomTime[Math.floor(Math.random() * randomTime.length)];
    setTimeout(() => {
        if (answer) {
            dispatch(cityActions.addActiveCity(answer));
        } else {
            dispatch(cityActions.setWinnerStatus(true));
        }
    }, randomSeconds);
};
