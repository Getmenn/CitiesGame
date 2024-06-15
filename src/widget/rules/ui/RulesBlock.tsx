import { StartGameBtn } from '@/features/startGameBtn';

export const RulesBlock = () => {
    return (
        <>
            <div className="px-[198px] py-[17px] border-b-4 border-solid border-gray-100 w-full">
                <h3 className="prose-base text-center">Игра в города на время</h3>
            </div>
            <div className="p-[24px] flex flex-col gap-6">
                <p className="prose-sm">Цель: Назвать как можно больше реальных городов.</p>
                <ul className="list-disc pl-4">
                    <li className="prose-sm">
                        Запрещается повторение городов.
                    </li>
                    <li className="prose-sm">
                        Названий городов на твердый “ъ” и мягкий “ъ” знак нет.
                        Из-за этого бы пропускаем эту букву и игрок должен назвать город на букву
                        стоящую перед ъ или ь знаком.
                    </li>
                    <li className="prose-sm">
                        Каждому игроку дается 2 минуты на размышления,
                        если спустя это время игрок не вводит слово он считается проигравшим
                    </li>
                </ul>
                <StartGameBtn />
            </div>
        </>
    );
};
