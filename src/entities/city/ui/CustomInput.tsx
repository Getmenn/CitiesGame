'use client';

import { use, useCallback, useEffect, useState } from 'react';

import { SendIcon } from '@/shared/assets/SendIcon';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Button } from '@/shared/ui';

import { activeCitiesSelector } from '../model/selectors/selectors';
import { cityActions } from '../model/slice/city';
import { getCurrentCities } from '../utils/getCurrentCities';
import { cities } from '../mock/mock';
import { getLastLetter } from '../utils/getLastLetter';

export const CustomInput = () => {
    const [cityInput, setCityInput] = useState('');
    const [error, setError] = useState(false);
    const activeCities = useAppSelector(activeCitiesSelector);
    const { addActiveCity } = useActions(cityActions);

    const disabled = activeCities && activeCities.length % 2 !== 0;

    useEffect(() => {
        if (activeCities.length % 2 === 0) {
            setCityInput('');
        } else {
            setCityInput('Ожидаем ответа соперника...');
        }
    }, [activeCities]);

    const handleSendCity = useCallback((newCity: string) => {
        const chartUpper = newCity.charAt(0).toUpperCase() + newCity.slice(1)

        if (activeCities.length === 0 && cities.includes(chartUpper)) {
            addActiveCity(newCity);
        } else if (activeCities.length === 0) {
            setError(true)
        } else {
            const currentCities = getCurrentCities({ activeCities })

            if (currentCities?.includes(chartUpper)) {
                addActiveCity(newCity);
            } else {
                setError(true)
            }
        }
    }, [activeCities]);

    const handleSendEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendCity(cityInput);
        }
    };

    const getInfoText = useCallback(() => {
        if (error) {
            return 'Неверное название города'
        } else if (activeCities.length >= 2) {
            return `Всего перечислено городов: ${activeCities.length}`
        }
        return ''
    }, [activeCities, error])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value)
        error && setError(false);
    }

    const getPlaceholder = useCallback(() => {
        if (activeCities.length === 0) {
            return 'Напишите любой город, например: Где вы живете?'
        }
        return `Знаете город на букву “${getLastLetter(activeCities)?.toUpperCase()}”?`
    }, [activeCities]);

    return (
        <div className="flex justify-between bg-[#f3f4f6] p-[8px] pl-[12px] rounded-[6px] gap-[15px] relative">
            <p className={`${error ? 'text-red-200' : 'text-gray-400'} prose-sm absolute -top-5 left-2/4 -translate-x-2/4 -translate-y-2/4`}>
                {getInfoText()}
            </p>
            <input
                className="w-full placeholder:text-gray-700 disabled:text-gray-400 bg-transparent focus:outline-none"
                placeholder={getPlaceholder()}
                disabled={disabled}
                value={cityInput}
                onChange={(e) => handleChangeInput(e)}
                onKeyDown={(e) => handleSendEnter(e)}
            />
            <Button
                icon
                onClick={() => handleSendCity(cityInput)}
                disabled={disabled}
            >
                <SendIcon />
            </Button>
        </div>
    );
};
