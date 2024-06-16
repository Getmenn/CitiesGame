'use client';

import { use, useEffect, useState } from 'react';

import { SendIcon } from '@/shared/assets/SendIcon';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Button } from '@/shared/ui';

import { activeCitiesSelector } from '../model/selectors/selectors';
import { cityActions } from '../model/slice/city';

export const CustomInput = () => {
    const [cityInput, setCityInput] = useState('');
    const activeCities = useAppSelector(activeCitiesSelector);
    const { addActiveCity } = useActions(cityActions);

    const disabled = activeCities && activeCities.length % 2 !== 0;

    useEffect(() => {
        if (activeCities.length === 0) {
            setCityInput('');
        } else {
            setCityInput('Ожидаем ответа соперника...');
        }
    }, [activeCities]);

    const handleSendCity = () => {
        addActiveCity(cityInput);
    };

    return (
        <div className="flex justify-between bg-[#f3f4f6] p-[8px] pl-[12px] rounded-[6px] gap-[15px]">
            <input
                className="w-full placeholder:text-gray-700 disabled:text-gray-400 bg-transparent focus:outline-none"
                placeholder="Напишите любой город, например: Где вы живете?"
                disabled={disabled}
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
            />
            <Button
                icon
                onClick={handleSendCity}
                disabled={disabled}
            >
                <SendIcon />
            </Button>
        </div>
    );
};
