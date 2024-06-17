'use client';

import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { Button } from '@/shared/ui';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { cityActions } from '@/entities/city';

export const StartGameBtn = memo(({ text = 'Начать игру' }: { text?: string }) => {
    const { push } = useRouter();
    const { setWinnerStatus, setActiveCities } = useActions(cityActions);

    const handleStartGame = () => {
        setWinnerStatus(false);
        setActiveCities([]);
        push('/game')
    };


    return (
        <Button className="m-auto" onClick={handleStartGame}>
            {text}
        </Button>
    );
});
