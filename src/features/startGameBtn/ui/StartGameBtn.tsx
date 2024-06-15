'use client';

import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { Button } from '@/shared/ui';

export const StartGameBtn = memo(({ text = 'Начать игру' }: {text: string }) => {
    const { push } = useRouter();

    return (
        <Button className="m-auto" onClick={() => push('/game')}>
            {text}
        </Button>
    );
});
