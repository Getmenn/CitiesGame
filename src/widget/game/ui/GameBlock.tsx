import { Countdown } from '@/entities/city/ui/Countdown';
import { CustomInput } from '@/entities/city/ui/CustomInput';
import { PlayField } from '@/entities/city/ui/PlayField';

export const GameBlock = () => {
    return (
        <>
            <div
                className="min-w-[576px] px-[16px] py-[17px] w-full flex justify-between items-center relative"
            >
                <Countdown />
            </div>
            <div className="h-[320px] w-full px-4 py-10">
                <PlayField />
            </div>
            <div className="w-full p-4">
                <CustomInput />
            </div>
        </>
    );
};
