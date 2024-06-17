import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    icon?: boolean,
    className?: string,
    handleClick?: () => void,
}

export const Button = memo(({
    children,
    icon = false,
    className,
    handleClick,
    ...otherProps
}: IProps) => {
    return (
        <button
            type="button"
            className={
                `${icon ? 'p-[6px]' : 'px-[16px] py-[8px]'} 
                bg-violet-600 
                rounded 
                text-white 
                w-fit 
                ${className} 
                hover:bg-violet-700
                disabled:bg-gray-400
                `
            }
            onClick={handleClick}
            {...otherProps}
        >
            {children}
        </button>
    );
});
