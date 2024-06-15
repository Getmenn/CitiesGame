import { Countdown } from './Countdown';
import { CustomInput } from './CustomInput';

export const GameBlock = () => {
    return (
        <>
            <div
                className="min-w-[576px] px-[16px] py-[17px] w-full flex justify-between items-center relative"
            >
                {/* <h3 className="prose-base">Сейчас ваша очередь</h3>
                <span className="prose-xl font-medium">2:00</span> */}
                <Countdown />
            </div>
            <div className="h-[320px] flex justify-between items-center">
                <p className="text-gray-400 prose-sm">Первый участник вспоминает города...</p>
            </div>
            <div className="w-full p-4">
                <CustomInput />
            </div>
        </>
    );
};
