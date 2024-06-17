import { cities } from '../mock/mock';
import { getLastLetter } from './getLastLetter';

interface IProps {
    activeCities: string[];
}

export const getCurrentCities = ({ activeCities }: IProps) => {
    const lastLetter = getLastLetter(activeCities);

    return cities.filter((city) => city.charAt(0).toLowerCase() === lastLetter);
};
