import { ReactNode } from 'react';

interface IProps {
    children: ReactNode
}

export const Modal = ({ children }: IProps) => {
    return (
        <section
            className="max-w-[576px] w-full bg-white rounded-2xl shadow flex-col justify-start items-center inline-flex"
        >
            {children}
        </section>
    );
};
