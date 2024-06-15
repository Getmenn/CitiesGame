import { SendIcon } from '@/shared/assets/SendIcon';
import { Button } from '@/shared/ui';

export const CustomInput = () => {
    return (
        <div className="flex justify-between bg-[#f3f4f6] p-[8px] pl-[12px] rounded-[6px] gap-[15px]">
            <input
                className="w-full placeholder:text-gray-700 disabled:placeholder:text-gray-400 bg-transparent focus:outline-none"
                placeholder="Напишите любой город, например: Где вы живете?"
                // disabled={!isUserTurn}
                // value={userInput}
                // onChange={(e) => setUserInput(e.target.value)}
            />
            <Button icon>
                <SendIcon />
            </Button>
        </div>
    );
};
