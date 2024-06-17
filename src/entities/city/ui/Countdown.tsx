'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

import { activeCitiesSelector } from '../model/selectors/selectors';
import { cityActions } from '../model/slice/city';

interface IProps {
    initialTime?: number;
}

export const Countdown = ({ initialTime = 120 }: IProps) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    const { push } = useRouter();
    const activeCities = useAppSelector(activeCitiesSelector);
    const { setWinnerStatus } = useActions(cityActions);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (activeCities.length % 2 === 0) {
                setWinnerStatus(false);
            } else {
                setWinnerStatus(true);
            }
            push('/final');
        }
    }, [timeLeft]);

    useEffect(() => {
        setTimeLeft(initialTime);
    }, [activeCities]);

    const widthTimer = (timeLeft / initialTime) * 100;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h3 className="prose-base">
                    {activeCities.length % 2 === 0 ? 'Сейчас ваша очередь' : 'Сейчас очередь соперника'}
                </h3>
                <span className="prose-xl font-medium">{new Date(timeLeft * 1000).toISOString().substr(14, 5)}</span>
            </div>
            <div className="h-[5px] bg-gray-100 absolute bottom-0 w-full left-0">
                <div
                    className="absolute h-full bg-violet-300 rounded-r-lg transition-all duration-1000"
                    style={{ width: `${widthTimer}%` }}
                />
            </div>
        </div>
    );
};
