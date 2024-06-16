'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IProps {
  initialTime?: number;
}

export const Countdown = ({ initialTime = 120 }: IProps) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const { push } = useRouter();

    useEffect(() => {
        if (timeLeft <= 0) push('/final');

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const percentage = (timeLeft / initialTime) * 100;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2">
                <h3 className="prose-base">Сейчас ваша очередь</h3>
                <span className="prose-xl font-medium">{new Date(timeLeft * 1000).toISOString().substr(14, 5)}</span>
            </div>
            <div className="h-[5px] bg-gray-100 absolute bottom-0 w-full left-0">
                <div
                    className="absolute h-full bg-violet-300 rounded-r-lg transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};
