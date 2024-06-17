'use client';

import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { cityActions } from '@/entities/city';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { Button } from '@/shared/ui';

export const StartGameBtn = memo(({ text = 'Начать игру' }: { text?: string }) => {
    const { push } = useRouter();
    const { setWinnerStatus, setActiveCities } = useActions(cityActions);

    const handleStartGame = () => {
        setWinnerStatus(false);
        setActiveCities([]);
        push('/game');
    };

    return (
        <Button className="m-auto" onClick={handleStartGame}>
            {text}
        </Button>
    );
});
