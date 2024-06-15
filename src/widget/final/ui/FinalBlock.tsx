import { StartGameBtn } from '@/features/startGameBtn';

export const FinalBlock = () => {
    const winner = false;
    const lastCity = 'Москва';

    return (
        <div className="flex flex-col justify-center items-center gap-8 p-10">
            {winner
                ? (
                    <p className="text-center prose-xl">
                        Поздравляем тебя с победой!
                        <br />
                        Твой противник не вспомнил нужный город!
                    </p>
                )
                : (
                    <p className="text-center prose-xl">
                        К сожалению твое время вышло!
                        <br />
                        Твой противник победил!
                    </p>
                )}
            <span className={`${winner ? 'text-green-600' : 'text-red-600'} text-center prose text-3xl`}>
                00:00
            </span>
            <p className="text-center prose-xl w-[353px]">
                Всего было перечислено городов: 31
                Очень не плохой результат!
            </p>
            <p className="text-center prose-xl">
                Последний город названный победителем
            </p>
            <span className="text-center prose-2xl font-medium">
                {lastCity}
            </span>
            <StartGameBtn text="Начать новую игру" />
        </div>
    );
};
