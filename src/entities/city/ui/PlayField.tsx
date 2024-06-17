'use client';

import { useEffect } from 'react';

import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { useThunk } from '@/shared/hooks/useThunk/useThunk';

import { activeCitiesSelector } from '../model/selectors/selectors';
import { aiFunction } from '../model/thunk/AiFunction';

const stylesPlayer = 'rounded-[12px_12px_0_12px] bg-violet-500 text-white ml-auto';
const stylesAI = 'rounded-[12px_12px_12px_0] bg-violet-50 mr-auto';

export const PlayField = () => {
    const activeCities = useAppSelector(activeCitiesSelector);
    const aiFunctionT = useThunk(aiFunction);

    useEffect(() => {
        if (activeCities.length % 2 !== 0) {
            aiFunctionT();
        }
    }, [activeCities]);

    if (activeCities.length === 0) {
        return (
            <div className="flex justify-between items-center h-full w-fit mx-auto my-0">
                <p className="text-gray-400 prose-sm">Первый участник вспоминает города...</p>
            </div>
        );
    }

    return (
        <div className="w-full grid grid-cols-[1fr_1fr]">
            {activeCities.map((city, index) => (
                <div
                    key={index}
                    className={`${index % 2 === 0 ? stylesPlayer : stylesAI} col-[1_/_3] px-5 py-1.5 flex items-center gap-2 h-full w-fit `}
                >
                    <span>{city}</span>
                </div>
            ))}
        </div>
    );
};
